/** @format */

import { describe, expect, mock, test } from 'bun:test';
import { grain } from '../grains/grain'; // Adjust the path as necessary
import { map } from './map.operator';
import { pipe } from './pipe.operator'; // Adjust the path as necessary
import { tap } from './tap.operator';

describe('Pipe Operator', () => {
    test('should apply a single operator correctly', () => {
        const piped = pipe(
            grain(5),
            map((x: number) => x * 2),
        );

        expect(piped()).toBe(10);
    });

    test('should apply multiple operators in sequence', () => {
        const piped = pipe(
            grain(5),
            map((x) => x * 2),
            map((x) => x + 1),
        );

        expect(piped()).toBe(11);
    });

    test('should execute side effects using tap operator', () => {
        const effect = mock(() => {});
        const source = grain(3);

        const piped = pipe(
            source,
            tap(effect),
            map((x: number) => x * 2),
        );

        expect(piped()).toBe(6);
        expect(effect).toHaveBeenCalled();
        expect(effect).toHaveBeenCalledWith(3);
    });

    test('should update the piped grain when source grain changes', () => {
        const source = grain(10);

        const piped = pipe(
            source,
            map((x) => x * 2),
        );

        expect(piped()).toBe(20);

        source.set(15);
        expect(piped()).toBe(30);

        source.set(20);
        expect(piped()).toBe(40);
    });

    test('should handle multiple subscriptions', () => {
        const source = grain(7);
        const piped = pipe(
            source,
            map((value) => value * 2),
        );

        let subscriberOneValue = 0;
        let subscriberTwoValue = 0;

        const unsubscribeOne = piped.subscribe((value) => {
            subscriberOneValue = value;
        });

        const unsubscribeTwo = piped.subscribe((value) => {
            subscriberTwoValue = value;
        });

        source.set(10);
        expect(subscriberOneValue).toBe(20);
        expect(subscriberTwoValue).toBe(20);

        unsubscribeOne();

        source.set(15);
        expect(subscriberOneValue).toBe(20);
        expect(subscriberTwoValue).toBe(30);

        unsubscribeTwo();
    });

    test('should support complex pipelines with side effects and transformations', () => {
        const effect = mock(() => {});
        const source = grain(5);

        const piped = pipe(
            source,
            tap(effect),
            map((value) => value * 2),
            map((value) => value.toString()),
        );

        expect(piped()).toBe('10');
        expect(effect).toHaveBeenCalledWith(5);

        source.set(7);
        expect(piped()).toBe('14');
        expect(effect).toHaveBeenCalledWith(7);
    });
});
