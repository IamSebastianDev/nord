/** @format */

import { grain, readonly, type Grain } from '../grains';

export type Operator<V, R = V> = (value: V) => R;

// INTERNAL USE ONLY
type Pipe = {
    <V, R1>(source: Grain<V>, operator: Operator<V, R1>): Grain<R1>;
    <V, R1, R2>(source: Grain<V>, o1: Operator<V, R1>, o2: Operator<R1, R2>): Grain<R2>;
    <V, R1, R2, R3>(source: Grain<V>, o1: Operator<V, R1>, o2: Operator<R1, R2>, o3: Operator<R2, R3>): Grain<R3>;
    <V, R1, R2, R3, R4>(
        source: Grain<V>,
        o1: Operator<V, R1>,
        o2: Operator<R1, R2>,
        o3: Operator<R2, R3>,
        o4: Operator<R3, R4>,
    ): Grain<R4>;
    <V, R1, R2, R3, R4, R5>(
        source: Grain<V>,
        o1: Operator<V, R1>,
        o2: Operator<R1, R2>,
        o3: Operator<R2, R3>,
        o4: Operator<R3, R4>,
        o5: Operator<R4, R5>,
    ): Grain<R5>;
    <V, R1, R2, R3, R4, R5, R6>(
        source: Grain<V>,
        o1: Operator<V, R1>,
        o2: Operator<R1, R2>,
        o3: Operator<R2, R3>,
        o4: Operator<R3, R4>,
        o5: Operator<R4, R5>,
        o6: Operator<R5, R6>,
    ): Grain<R6>;
    <V, R1, R2, R3, R4, R5, R6, R7>(
        source: Grain<V>,
        o1: Operator<V, R1>,
        o2: Operator<R1, R2>,
        o3: Operator<R2, R3>,
        o4: Operator<R3, R4>,
        o5: Operator<R4, R5>,
        o6: Operator<R5, R6>,
        o7: Operator<R6, R7>,
    ): Grain<R7>;
    <V, R1, R2, R3, R4, R5, R6, R7, R8>(
        source: Grain<V>,
        o1: Operator<V, R1>,
        o2: Operator<R1, R2>,
        o3: Operator<R2, R3>,
        o4: Operator<R3, R4>,
        o5: Operator<R4, R5>,
        o6: Operator<R5, R6>,
        o7: Operator<R6, R7>,
        o8: Operator<R7, R8>,
    ): Grain<R8>;
    <V, R1, R2, R3, R4, R5, R6, R7, R8, R9>(
        source: Grain<V>,
        o1: Operator<V, R1>,
        o2: Operator<R1, R2>,
        o3: Operator<R2, R3>,
        o4: Operator<R3, R4>,
        o5: Operator<R4, R5>,
        o6: Operator<R5, R6>,
        o7: Operator<R6, R7>,
        o8: Operator<R7, R8>,
        o9: Operator<R8, R9>,
    ): Grain<R9>;
    <V, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10>(
        source: Grain<V>,
        o1: Operator<V, R1>,
        o2: Operator<R1, R2>,
        o3: Operator<R2, R3>,
        o4: Operator<R3, R4>,
        o5: Operator<R4, R5>,
        o6: Operator<R5, R6>,
        o7: Operator<R6, R7>,
        o8: Operator<R7, R8>,
        o9: Operator<R8, R9>,
        o10: Operator<R9, R10>,
    ): Grain<R10>;
    <V, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11>(
        source: Grain<V>,
        o1: Operator<V, R1>,
        o2: Operator<R1, R2>,
        o3: Operator<R2, R3>,
        o4: Operator<R3, R4>,
        o5: Operator<R4, R5>,
        o6: Operator<R5, R6>,
        o7: Operator<R6, R7>,
        o8: Operator<R7, R8>,
        o9: Operator<R8, R9>,
        o10: Operator<R9, R10>,
        o11: Operator<R10, R11>,
    ): Grain<R11>;
    <V, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12>(
        source: Grain<V>,
        o1: Operator<V, R1>,
        o2: Operator<R1, R2>,
        o3: Operator<R2, R3>,
        o4: Operator<R3, R4>,
        o5: Operator<R4, R5>,
        o6: Operator<R5, R6>,
        o7: Operator<R6, R7>,
        o8: Operator<R7, R8>,
        o9: Operator<R8, R9>,
        o10: Operator<R9, R10>,
        o11: Operator<R10, R11>,
        o12: Operator<R11, R12>,
    ): Grain<R12>;
    <V, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13>(
        source: Grain<V>,
        o1: Operator<V, R1>,
        o2: Operator<R1, R2>,
        o3: Operator<R2, R3>,
        o4: Operator<R3, R4>,
        o5: Operator<R4, R5>,
        o6: Operator<R5, R6>,
        o7: Operator<R6, R7>,
        o8: Operator<R7, R8>,
        o9: Operator<R8, R9>,
        o10: Operator<R9, R10>,
        o11: Operator<R10, R11>,
        o12: Operator<R11, R12>,
        o13: Operator<R12, R13>,
    ): Grain<R13>;
    <V, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14>(
        source: Grain<V>,
        o1: Operator<V, R1>,
        o2: Operator<R1, R2>,
        o3: Operator<R2, R3>,
        o4: Operator<R3, R4>,
        o5: Operator<R4, R5>,
        o6: Operator<R5, R6>,
        o7: Operator<R6, R7>,
        o8: Operator<R7, R8>,
        o9: Operator<R8, R9>,
        o10: Operator<R9, R10>,
        o11: Operator<R10, R11>,
        o12: Operator<R11, R12>,
        o13: Operator<R12, R13>,
        o14: Operator<R13, R14>,
    ): Grain<R14>;
    <V, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14, R15>(
        source: Grain<V>,
        o1: Operator<V, R1>,
        o2: Operator<R1, R2>,
        o3: Operator<R2, R3>,
        o4: Operator<R3, R4>,
        o5: Operator<R4, R5>,
        o6: Operator<R5, R6>,
        o7: Operator<R6, R7>,
        o8: Operator<R7, R8>,
        o9: Operator<R8, R9>,
        o10: Operator<R9, R10>,
        o11: Operator<R10, R11>,
        o12: Operator<R11, R12>,
        o13: Operator<R12, R13>,
        o14: Operator<R13, R14>,
        o15: Operator<R14, R15>,
    ): Grain<R15>;
    <V, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14, R15, R16>(
        source: Grain<V>,
        o1: Operator<V, R1>,
        o2: Operator<R1, R2>,
        o3: Operator<R2, R3>,
        o4: Operator<R3, R4>,
        o5: Operator<R4, R5>,
        o6: Operator<R5, R6>,
        o7: Operator<R6, R7>,
        o8: Operator<R7, R8>,
        o9: Operator<R8, R9>,
        o10: Operator<R9, R10>,
        o11: Operator<R10, R11>,
        o12: Operator<R11, R12>,
        o13: Operator<R12, R13>,
        o14: Operator<R13, R14>,
        o15: Operator<R14, R15>,
        o16: Operator<R15, R16>,
    ): Grain<R16>;
};

// Necessary because of the function overload definitions
// eslint-disable-next-line
export const pipe: Pipe = <V, R>(source: Grain<V>, ...operators: Operator<any, any>[]): Grain<R> => {
    const run = (next: V): R => operators.reduce((current, operator) => operator(current), next) as unknown as R;
    const result = grain<R>(run(source()));

    // Subscribe to the source and update the grain whenever the source changes
    // We want to eagerly update the chain to allow for direct access of the
    // returned readonly grain
    source.subscribe((next) => result.set(run(next)));

    return readonly(result);
};
