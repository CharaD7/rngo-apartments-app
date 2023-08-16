import React, { useState } from 'react';
import { Animated, LayoutChangeEvent, StyleSheet, TouchableOpacity, View } from 'react-native';

import { RowMeta } from '~components/CardInfo';
import { HeaderFilter, HeaderInput } from '~components/HeaderSection';
import { HEADERHEIGHT, LISTMARGIN } from '~constants/ScreenConstants';

import { Feather } from '@expo/vector-icons';
import { Divider, Text } from '@ui-kitten/components';

import { theme } from '../../theme';

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
      <View style={styles.defaultMarginHorizontal}>
        <HeaderInput />
        <HeaderFilter />
      </View>
      <Divider style={{ backgroundColor: theme['color-gray'] }} />
      <RowMeta
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: LISTMARGIN,
          marginVertical: 5,
        }}
      >
        <RowMeta>
          <Feather color={theme['color-primary-500']} name="map-pin" size={18} />
          <Text category={'c1'} appearance={'hint'}>
            12 Available
          </Text>
          <TouchableOpacity onPress={() => console.log('save')}>
            <Text
              category={'c1'}
              style={{ color: theme['color-info-500'], fontWeight: 'bold', marginLeft: 5 }}
            >
              {' '}
              Save{' '}
            </Text>
          </TouchableOpacity>
        </RowMeta>
        <RowMeta>
          <TouchableOpacity onPress={() => console.log('sort')}>
            <RowMeta style={{ alignItems: 'center', marginHorizontal: LISTMARGIN }}>
              <Feather name="layers" color={theme['color-info-500']} size={18} />
              <Text category={'c1'} style={{ color: theme['color-info-500'], fontWeight: 'bold' }}>
                {' '}
                Sort{' '}
              </Text>
            </RowMeta>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('map')}>
            <RowMeta style={{ alignItems: 'center', marginLeft: 10 }}>
              <Feather name="map" color={theme['color-info-500']} size={18} />
              <Text category={'c1'} style={{ color: theme['color-info-500'], fontWeight: 'bold' }}>
                {' '}
                Map{' '}
              </Text>
            </RowMeta>
          </TouchableOpacity>
        </RowMeta>
      </RowMeta>
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
});
