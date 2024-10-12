/** @format */

// INTERNAL USE ONLY
const defaultCompareFn = <V = unknown>(current: V, next: V) => current === next;

/**
 * A `subscriber` is a callback added when subscribing to a `grain`, allowing to react
 * to changes in the source `grain`s value.
 */
export type Subscriber<V = unknown> = (value: V) => void;
/**
 * Function returned by the `subscribe` method of a `grain`, allowing to
 * unsubscribe from listening to changes in the `grain`s value
 */
export type Unsubscribe = () => void;

export type Grain<V = unknown> = {
    (): V;
    subscribe: (subscriber: Subscriber<V>) => Unsubscribe;
};

export type WritableGrain<V> = Grain<V> & {
    set: (next: V) => void;
    update: (run: (current: V) => V) => void;
};

export const grain = <V = unknown>(start: V, isEqual = defaultCompareFn): WritableGrain<V> => {
    let _value = start;
    const consumers = new Set<Subscriber<V>>();

    const notifyConsumers = () => consumers.forEach((consumer) => consumer(_value));

    const set = (newValue: V) => {
        if (!isEqual(_value, newValue)) {
            _value = newValue;
            notifyConsumers();
        }
    };

    const update = (updater: (current: V) => V) => set(updater(_value));

    const subscribe = (subscriber: Subscriber<V>) => {
        consumers.add(subscriber);
        return () => consumers.delete(subscriber);
    };

    const grain = () => _value;
    grain['set'] = set;
    grain['update'] = update;
    grain['subscribe'] = subscribe;

    return grain;
};
