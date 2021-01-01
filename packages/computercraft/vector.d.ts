/**
 * The vector API provides methods to create and manipulate vectors.
 *
 * An introduction to vectors can be found on[Wikipedia][wiki].
*/
declare module "vector" {
    /**
     * A 3 - dimensional vector, with `x`, `y`, and`z` values.
     *
     * This is suitable for representing both position and directional vectors.
    */
    type vector = number & {
        x: number;
        y: number;
        z: number;

        /**
         * - Adds two vectors together.
         *
         * @param o The second vector to add.
         * @returns The resulting vector
         * @example
         * v1: add(v2)
         * @example
         * v1 + v2
        */
        add(o: vector): vector;

        /**
         * - Subtracts one vector from another.
         *
         * @param o The vector to subtract.
         * @returns The resulting vector
         * @example
         * v1: sub(v2)
         * @example
         * v1 - v2
        */
        sub(o: vector): vector;

        /**
         * - Multiplies a vector by a scalar value.
         *
         * @param number m The scalar value to multiply with.
         * @returns A vector with value`(x * m, y * m, z * m)`.
         * @example
         * v:mul(3)
         * @example
         * v * 3
        */
        mul(m: vector): vector;

        /**
         * - Divides a vector by a scalar value.
         *
         * @param number m The scalar value to divide by.
         * @returns A vector with value`(x / m, y / m, z / m)`.
         * @example
         * v:div(3)
         * @example
         * v / 3
        */
        div(m: vector): vector;

        /**
         * - Negate a vector
         *
         * @returns The negated vector.
         * @example
         * -v
        */
        unm(): vector;

        /**
         * - Compute the dot product of two vectors
         *
         * @param o The second vector to compute the dot product of.
         * @returns The dot product of`self` and`o`.
         * @example
         * v1: dot(v2)
        */
        dot(o: vector): vector;

        /**
         * - Compute the cross product of two vectors
         *
         * @param o The second vector to compute the cross product of.
         * @returns The cross product of`self` and`o`.
         * @example
         * v1: cross(v2)
        */
        cross(o: vector): vector;

        /**
         * - Get the length(also referred to as magnitude) of this vector.
         * @returns The length of this vector.
        */
        length(): number;

        /**
         * - Divide this vector by its length, producing with the same direction, but
         * of length 1.
         *
         * @returns The normalised vector
         * @example
         * v:normalize()
        */
        normalize(): vector;

        /**
         * - Construct a vector with each dimension rounded to the nearest value.
         *
         * @param[opt] number tolerance The tolerance that we should round to,
         * defaulting to 1. For instance, a tolerance of 0.5 will round to the
         * nearest 0.5.
         * @returns The rounded vector.
        */
        round(tolerance: number): vector;

        /**
         * - Convert this vector into a string, for pretty printing.
         *
         * @returns This vector's string representation.
         * @example
         * v:tostring()
         * @example
         * tostring(v)
        */
        tostring(): string;
    }

    let exports: {
        vector: vector;

        /**
         * - Construct a new @{ Vector } with the given coordinates.
         *
         * @param number x The X coordinate or direction of the vector.
         * @param number y The Y coordinate or direction of the vector.
         * @param number z The Z coordinate or direction of the vector.
         * @returns The constructed vector.
        */
        new: (x: number, y: number, z: number) => vector;
    };

    export = exports;
}
