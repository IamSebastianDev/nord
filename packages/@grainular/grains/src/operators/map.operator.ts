/** @format */

import type { Operator } from './pipe.operator';

export const map = <V, R>(run: (value: V) => R): Operator<V, R> => {
    return (value: V) => {
        return run(value);
    };
};
