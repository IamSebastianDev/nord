/** @format */

import type { Operator } from './pipe.operator';

export const tap = <V>(run: (value: V) => void): Operator<V, V> => {
    return (value) => {
        run(value);
        return value;
    };
};
