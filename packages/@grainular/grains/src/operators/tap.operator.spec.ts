/** @format */

import { describe, expect, mock, test } from 'bun:test';
import { tap as tapToMock } from './tap.operator';

const tap = mock(tapToMock);

describe('Tap Operator', () => {
    test('should execute a side effect when called', () => {
        const effect = mock(() => {});
        tap(effect)(10);
        expect(effect).toHaveBeenCalled();
        expect(effect).toHaveBeenCalledTimes(1);
    });

    test('should not alter the original value', () => {
        const effect = mock(() => {});
        const result = tap(effect)(10);
        expect(result).toBe(10);
    });

    test('should execute the side effect every time a new value is passed', () => {
        const effect = mock(() => {});

        tap(effect)(10);
        tap(effect)(20);
        tap(effect)(30);

        expect(effect).toHaveBeenCalledWith(10);
        expect(effect).toHaveBeenCalledWith(20);
        expect(effect).toHaveBeenCalledWith(30);
        expect(effect).toHaveBeenCalledTimes(3);
    });

    test('should not alter objects', () => {
        const obj = {};
        const result = tap(() => {})(obj);
        expect(result).toBe(obj);
    });
});
