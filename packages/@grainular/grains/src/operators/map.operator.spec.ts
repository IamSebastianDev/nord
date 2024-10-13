/** @format */

import { describe, expect, mock, test } from 'bun:test';
import { map } from './map.operator';

describe('Map Operator', () => {
    test('should apply the transformation function to the value', () => {
        const transform = mock((x: number) => x * 2);
        const result = map(transform)(10);

        expect(result).toBe(20);
        expect(transform).toHaveBeenCalled();
        expect(transform).toHaveBeenCalledTimes(1);
        expect(transform).toHaveBeenCalledWith(10);
    });

    test('should handle multiple transformations', () => {
        const transform = mock((x: number) => x + 1);

        const result1 = map(transform)(5);
        const result2 = map(transform)(15);
        const result3 = map(transform)(25);

        expect(result1).toBe(6);
        expect(result2).toBe(16);
        expect(result3).toBe(26);

        expect(transform).toHaveBeenCalledWith(5);
        expect(transform).toHaveBeenCalledWith(15);
        expect(transform).toHaveBeenCalledWith(25);
        expect(transform).toHaveBeenCalledTimes(3);
    });

    test('should handle different input and output types', () => {
        const transform = mock((x: string) => x.length);
        const result = map(transform)('hello');

        expect(result).toBe(5);
        expect(transform).toHaveBeenCalled();
        expect(transform).toHaveBeenCalledWith('hello');
    });

    test('should work with objects', () => {
        const transform = mock((obj: { key: string }) => obj.key);
        const obj = { key: 'value' };
        const result = map(transform)(obj);

        expect(result).toBe('value');
        expect(transform).toHaveBeenCalledWith(obj);
    });
});
