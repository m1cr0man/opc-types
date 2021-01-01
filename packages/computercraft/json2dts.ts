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

const KEYS_MAP = <typeof COLOR_MAP>{
    space: 32,
    apostrophe: 39,
    comma: 44,
    minus: 45,
    period: 46,
    slash: 47,
    zero: 48,
    one: 49,
    two: 50,
    three: 51,
    four: 52,
    five: 53,
    six: 54,
    seven: 55,
    eight: 56,
    nine: 57,
    semiColon: 59,
    equals: 61,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    leftBracket: 91,
    backslash: 92,
    rightBracket: 93,
    grave: 96,
    enter: 257,
    tab: 258,
    backspace: 259,
    insert: 260,
    // "delete": 261,
    right: 262,
    left: 263,
    down: 264,
    up: 265,
    pageUp: 266,
    pageDown: 267,
    home: 268,
    end: 269,
    capsLock: 280,
    scrollLock: 281,
    numLock: 282,
    pause: 284,
    f1: 290,
    f2: 291,
    f3: 292,
    f4: 293,
    f5: 294,
    f6: 295,
    f7: 296,
    f8: 297,
    f9: 298,
    f10: 299,
    f11: 300,
    f12: 301,
    f13: 302,
    f14: 303,
    f15: 304,
    f16: 305,
    f17: 306,
    f18: 307,
    f19: 308,
    f20: 309,
    f21: 310,
    f22: 311,
    f23: 312,
    f24: 313,
    f25: 314,
    numPad0: 320,
    numPad1: 321,
    numPad2: 322,
    numPad3: 323,
    numPad4: 324,
    numPad5: 325,
    numPad6: 326,
    numPad7: 327,
    numPad8: 328,
    numPad9: 329,
    numPadDecimal: 330,
    numPadDivide: 331,
    numPadSubtract: 333,
    numPadAdd: 334,
    numPadEnter: 335,
    numPadEqual: 336,
    leftShift: 340,
    leftCtrl: 341,
    leftAlt: 342,
    rightShift: 344,
    rightCtrl: 345,
    rightAlt: 346
}

const SKIPPED = [
    "vector",
    "table",
    "math",
    "string",
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
        return `[${type.split(",").map(t => mapType(t.trim())).join(", ")}]`
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
            this.type = `(${this.type})[]`
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
        } else if (KEYS_MAP[name] !== undefined) {
            this.value = KEYS_MAP[name]
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
            `${this.topLevel && "declare " || ""}function ${this.name}(${args}): ${this.returnType};`,
        ]
    }
}

class CCLibrary implements Typescriptable {
    constructor(
        public name: string,
        public description: string,
        public properties: (CCConstant | CCFunction)[],
    ) {
        if (this.name == "keys")
            this.properties.push(...Object.keys(KEYS_MAP).map(key => new CCConstant(
                key,
                "",
                "number"
            )))
    }

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
