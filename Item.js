import React, { useState } from 'react';
import {
    StyleSheet,
    Image,
} from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { useTiming } from './hooks/useTiming';
import { r } from './constants'



function Item({ el, s }) {
    const [loading, setLoading] = useState(false);
    const mix = (value, x, y) => {
        "worklet";
        return x + value * (y - x);
    };

    const transition = useTiming(loading, {
        duration: 5000,
    });

    const animatedStyleConfig = useAnimatedStyle(() => {

        const scale = mix(
            transition.value,
            0,
            Math.hypot(
                r + Math.abs(el.translate.x),
                r + Math.abs(el.translate.y)
            ) / r
        );

        return {
            transform: [
                { translateX: el.translate.x },
                { translateY: el.translate.y },
                { scale }
            ]
        }
    })

    return (
        <MaskedView style={StyleSheet.absoluteFill} maskElement={
            <Animated.View style={[{ ...StyleSheet.absoluteFillObject }, s.animated, animatedStyleConfig]} />
        } >
            <Image style={[{ ...StyleSheet.absoluteFillObject }, s.images]}
                source={el.picture}
                onLoadEnd={() => setLoading(true)}
            />
        </MaskedView>
    )
}


export default Item;


// native Animated
// const progress = useRef(new Animated.Value(0)).current;
// useEffect(() => {
    //     if (loading) {
    //         Animated.timing(progress, {
    //             toValue: 1,
    //             duration: 1000,
    //             easing: Easing.linear,
    //             useNativeDriver: true,
    //         }).start();
    //     }
    // }, [progress, loading])

    // const scale = progress.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: [0, Math.SQRT2],
    // })