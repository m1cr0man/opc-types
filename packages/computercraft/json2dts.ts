import { AssertionError } from 'assert'
import * as fs from 'fs'

type JSONData = { [K: string]: any }

const COLOR_MAP = <{ [K: string]: number }>{
    white: 1,
    orange: 2,
    magenta: 4,
    lightBlue: 8,
    yellow: 16,
    lime: 32,
    pink: 64,
    gray: 128,
    lightGray: 256,
    grey: 128,
    lightGrey: 256,
    cyan: 512,
    purple: 1024,
    blue: 2048,
    brown: 4096,
    green: 8192,
    red: 16384,
    black: 32768,
}

const SKIPPED = [
    "vector",
    "table",
    "math",
    "string",
    "keys",
    "coroutine",
]

function mapType(type: string, first?: boolean): string {
    if (type === undefined) return "void"
    if (type == "coroutine") return "LuaThread"
    if (type == "function") return "((...args: any[]) => any)"
    if (type == "color") return "Color"
    if (type == "table") return "Table"

    // This is just to make parsing easier
    type = type.replaceAll(/\[, */g, ",[")

    if (type.slice(-3) == "...") {
        type = mapType(type.slice(0, -3).trim())
        if (first) return `${type}[]`
        else return `...(${type})`
    }
    if (type.indexOf("/") + 1) {
        return `${type.split("/").map(t => mapType(t.trim())).join(" | ")}`
    }
    if (type.indexOf("|") + 1) {
        return `${type.split("|").map(t => mapType(t.trim())).join(" | ")}`
    }
    if (type[0] == "(") {
        return `(${mapType(type.slice(1, type.indexOf(")")))})`
    }
    if (type.indexOf(",") + 1) {
        return `MultiReturn<[${type.split(",").map(t => mapType(t.trim())).join(", ")}]>`
    }
    if (type[0] == "[") {
        type = mapType(type.slice(1, -1).trim()) + " | null"
    }

    if (type == "nil") return "null"
    return type
}

interface Typescriptable {
    toTypescript(): string[]
}

class CCSpecial implements Typescriptable {
    toTypescript(): string[] {
        return [
            'import "lua-types/5.2";',
            "type Color = number;",
            "type Table = {[K in string | number]: any};",
            "/** @vararg */",
            "interface LuaVarArgs<T> extends Array<T> {}",
        ]
    }
}

class CCArgument {
    constructor(
        public name: string,
        public description: string,
        public type: string
    ) {
        this.type = mapType(type, true)


        // Remove dashes
        const pattern = /[- ](.)/
        let match = this.name.match(pattern)
        while (match) {
            this.name = this.name.replace(match[0], match[1].toUpperCase())
            match = this.name.match(pattern)
        }

        // Optional arg
        if (this.name[0] == "[") {
            this.name = this.name.slice(1, -1) + "?"
        }

        if (this.name == "...") {
            this.name = "...args"
            this.type = `LuaVarArgs<${this.type}>`
        }

        // Keywords
        this.name = this.name.replace("function", "func").replace("default", "def")
    }

    static fromJSON(data: JSONData): CCArgument {
        return new CCArgument(
            data.name,
            data.doc,
            data.type,
        )
    }
}

class CCConstant implements Typescriptable {
    public value: any = 0

    constructor(
        public name: string,
        public description: string,
        public type: string,
    ) {
        if (this.type == "color") {
            this.value = COLOR_MAP[this.name]
        }

        this.type = mapType(type, true)
    }

    static fromJSON(data: JSONData): CCConstant {
        return new CCConstant(
            data.name,
            data.doc,
            data.type
        )
    }

    toTypescript(): string[] {
        if (this.value == 0) return []
        const result = [
            `const ${this.name} = ${this.value};`
        ]
        if (this.description !== "") result.unshift(
            `/**`,
            ` * ${this.description}`,
            `*/`,
        )
        return result
    }
}

class CCFunction implements Typescriptable {
    constructor(
        public name: string,
        public description: string,
        public returnType: string,
        public args: CCArgument[],
        public topLevel: boolean,
    ) {
        this.returnType = mapType(returnType, true)
    }

    static fromJSON(data: JSONData, topLevel?: boolean): CCFunction {
        return new CCFunction(
            data.name,
            data.doc,
            data.returns,
            Object.values(<{ [K: string]: JSONData }>data.args).map(CCArgument.fromJSON),
            topLevel == true
        )
    }

    toTypescript(): string[] {
        const args = this.args.map(arg => `${arg.name}: ${arg.type}`).join(", ")
        const argComments = this.args.map(arg => ` * @param ${arg.name.replace("?", "")} - ${arg.description}`)
        return [
            `/**`,
            ` * ${this.description}`,
            ` * `,
            ...argComments,
            `*/`,
            `${this.topLevel && "declare " || "export "}function ${this.name}(${args}): ${this.returnType};`,
        ]
    }
}

class CCLibrary implements Typescriptable {
    constructor(
        public name: string,
        public description: string,
        public properties: (CCConstant | CCFunction)[],
    ) { }

    static mapProperty(prop: JSONData): (CCConstant | CCFunction) {
        if (prop.type == "function") return CCFunction.fromJSON(prop)
        if (prop.type == "color" || prop.type == "number" || prop.type == "string" || prop.type == "byte" || prop.type == "table") return CCConstant.fromJSON(prop)
        throw new AssertionError({ message: `Invalid prop type ${prop.type} (${prop.name})` })
    }

    static fromJSON(data: JSONData): CCLibrary {
        // Skip "delete", as it's a keyword and can't be solved for
        let props = Object.values(<{ [K: string]: JSONData }>data.properties).filter(prop => prop.name != "delete").map(CCLibrary.mapProperty)
        if (data.name == "keys") props = props.filter(prop => prop instanceof CCFunction)
        return new CCLibrary(
            data.name,
            data.doc,
            props
        )
    }

    toTypescript(): string[] {
        return [
            `/**`,
            ` * ${this.description}`,
            ` * `,
            ` * @noSelf`,
            ` * @noResolution`,
            `*/`,
            `declare module "${this.name}" {`,
            ...this.properties.reduce((props, prop) => [...props, ...prop.toTypescript().map(line => `    ${line}`)], <string[]>[]),
            `}`,
        ]
    }
}

function transform(object: { [K: string]: JSONData }): (CCLibrary | CCFunction | CCConstant)[] {
    return Object.values(object).filter(prop => !SKIPPED.includes(prop.name)).map(prop => {
        if (prop.type == "field") return CCLibrary.fromJSON(prop)
        // Skip "delete" function, as it's a keyword and can't be solved for
        if (prop.type == "function") return CCFunction.fromJSON(prop, true)
        throw new AssertionError({ message: `Invalid library/function type ${prop.type}` })
    })
}

function main() {
    const jsonData = JSON.parse(
        fs.readFileSync("classes.json").toString("utf-8")
    )

    const funcsAndLibs: Typescriptable[] = transform(jsonData)
    funcsAndLibs.unshift(new CCSpecial())

    fs.writeFileSync("output.d.ts", funcsAndLibs.reduce((o, v) => o + v.toTypescript().join("\n") + "\n", ""))

    console.log("Done!")

}

main()
