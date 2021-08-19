import React, { useEffect } from 'react';

import {
  Container
} from './styles';
import { TapGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { Button, useWindowDimensions } from 'react-native';


export function TestScreen() {


  // const animatedStyle = useAnimatedStyle(() => {
  //   return {

  //     opacity: withTiming(cardOpacity.value),



  //   }
  // })

  const { width: displayWidth } = useWindowDimensions();
  const cardOpacity = useSharedValue(0);
  const cardOffset = useSharedValue(0.25 * displayWidth);

  const borderV = useSharedValue(0);
  function handleOpacityNumber() {
    'worklet';
    return (cardOpacity.value === 0 ? 1 : 0);

  }

  const animatedStyles = useAnimatedStyle(() => {
    return {
      // transform: [
      //   { translateX: withSpring(cardOffset.value) }
      // ],
      translateX: cardOffset.value,
      opacity: cardOpacity.value,
      borderRadius: borderV.value,
    };
  });

  useEffect(() => {
    // cardOpacity.value = withRepeat(withSpring(1), -1, true)
    cardOpacity.value = withRepeat(withTiming(1, {
      duration: 1000
    }), -1);

    cardOffset.value = withRepeat(withTiming(0, {
      duration: 1000
    }), -1);

  })
  return (
    <Container>
      {/* <Animated.View style={[{ width: 50, height: 50, backgroundColor: 'red' }]}>

      </Animated.View> */}
      <Animated.View style={[{ width: 200, height: 200, backgroundColor: 'red' }, animatedStyles]} />
      <Button onPress={() => (cardOffset.value = Math.random())} title="Move" />
      <Button onPress={() => (cardOpacity.value = handleOpacityNumber())} title="HIDE" />
    </Container>
  );
}