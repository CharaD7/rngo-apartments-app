import React, { useState } from 'react';
import { Animated, LayoutChangeEvent, StyleSheet, View } from 'react-native';

import { HeaderFilter, HeaderInput, HeaderLogistics } from '~components/HeaderSection';
import { HEADERHEIGHT, LISTMARGIN } from '~constants/ScreenConstants';

import { Divider } from '@ui-kitten/components';

import { theme } from '../../theme';

const AnimatedListHeader = ({
  scrollAnimation,
  mapShown,
  setMapShown,
}: {
  scrollAnimation: Animated.Value;
  mapShown: boolean;
  setMapShown: (mapShown: boolean) => void;
}) => {
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
      style={[styles.listHeader, { transform: [{ translateY: navbarTranslate }] }]}
      onLayout={onLayout}
    >
      <View style={styles.defaultMarginHorizontal}>
        <HeaderInput />
        <HeaderFilter />
      </View>
      <Divider style={styles.divider} />
      <HeaderLogistics mapShown={mapShown} setMapShown={setMapShown} />
    </Animated.View>
  );
};

export default AnimatedListHeader;

const styles = StyleSheet.create({
  listHeader: {
    backgroundColor: '#fff',
    height: HEADERHEIGHT,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1000,
  },
  defaultMarginHorizontal: {
    marginHorizontal: LISTMARGIN,
  },
  divider: {
    backgroundColor: theme['color-gray'],
  },
});
