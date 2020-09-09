import { useEffect } from 'react';
import { useSharedValue, useDerivedValue, withTiming } from 'react-native-reanimated';

const bin = (value = 0 | 1) => (value ? 1 : 0);

export function useTiming(state, config) {
    const value = useSharedValue(0);

    useEffect(() => {
        value.value = typeof state === "boolean" ? bin(state) : state;
    }, [state, value]);

    const transition = useDerivedValue(() => {
        return withTiming(value.value, config);
    });

    return transition;
};