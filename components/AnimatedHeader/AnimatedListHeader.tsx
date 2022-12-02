import React, { useState } from 'react';
import {
  Animated,
  FlatList,
  LayoutChangeEvent,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { Text } from '@ui-kitten/components';

import { HEADERHEIGHT, LISTMARGIN } from '../../constants/ScreenConstants';
import { theme } from '../../theme';
import { RowMeta } from '../CardInfo';

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
      style={[styles.listHeader, { transform: [{ translateY: navbarTranslate }] }]}
      onLayout={onLayout}
    >
      <View style={{ marginHorizontal: LISTMARGIN }}>
        <TouchableOpacity
          onPress={() => console.log('navigate to input screen')}
          style={{
            borderColor: '#d3d3d3',
            borderRadius: 30,
            borderWidth: 1,
            marginTop: Platform.OS === 'ios' ? 50 : 40,
            padding: 10,
          }}
        >
          <RowMeta style={{ alignItems: 'center' }}>
            <Feather name="search" color={theme['color-primary-500']} size={20} />
            <Text style={{ right: 250 }}>Find a Location</Text>
          </RowMeta>
        </TouchableOpacity>
      </View>
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
});
