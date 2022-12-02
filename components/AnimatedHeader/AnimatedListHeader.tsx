import React, { useState } from 'react';
import { Animated, LayoutChangeEvent } from 'react-native';

import { HEADERHEIGHT } from '../../constants/ScreenConstants';

const AnimatedListHeader = ({ scrollAnimation }: { scrollAnimation: Animated.Value }) => {
  const [offsetAnimation] = useState(new Animated.Value(0));
  const [clampedScroll, setClampedScroll] = useState(
    Animated.diffClamp(
      Animated.add(
        scrollAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolateLeft: 'clamp',
        }),
        offsetAnimation,
      ),
      0,
      1,
    ),
  );

  const navbarTranslate = clampedScroll.interpolate({
    inputRange: [0, HEADERHEIGHT],
    outputRange: [0, -HEADERHEIGHT],
    extrapolate: 'clamp',
  });

  const onLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setClampedScroll(
      Animated.diffClamp(
        Animated.add(
          scrollAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolateLeft: 'clamp',
          }),
          offsetAnimation,
        ),
        0,
        height,
      ),
    );
  };

  return (
    <Animated.View
      style={{
        backgroundColor: 'red',
        height: HEADERHEIGHT,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        transform: [{ translateY: navbarTranslate }],
        zIndex: 1000,
      }}
      onLayout={onLayout}
    ></Animated.View>
  );
};

export default AnimatedListHeader;
