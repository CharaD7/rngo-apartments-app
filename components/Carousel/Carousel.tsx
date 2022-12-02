import React, { useRef, useState } from 'react';
import { FlatList, Image, Pressable, StyleSheet, View } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { WIDTH } from '../../constants/ScreenConstants';
import { theme } from '../../theme';

const Carousel = ({ images }: { images: string[] }) => {
  const flatListRef = useRef<FlatList | null>(null);
  const viewConfig = { viewAreaCoveragePercentThreshold: 95 };
  const [activeIndex, setActiveIndex] = useState(0);
  const onViewRef = useRef(({ changed }: { changed: any }) => {
    if (changed[0].isViewable) {
      setActiveIndex(changed[0].index);
    }
  });

  const handlePressLeft = () => {
    if (activeIndex === 0) {
      return flatListRef.current?.scrollToIndex({
        animated: false,
        index: images.length - 1,
      });
    }

    flatListRef.current?.scrollToIndex({
      index: activeIndex - 1,
    });
  };

  const handlePressRight = () => {
    if (activeIndex === images.length - 1) {
      return flatListRef.current?.scrollToIndex({
        animated: false,
        index: 0,
      });
    }

    flatListRef.current?.scrollToIndex({
      index: activeIndex + 1,
    });
  };

  return (
    <View>
      <FlatList
        data={images}
        horizontal
        keyExtractor={(item) => item}
        onViewableItemsChanged={onViewRef.current}
        pagingEnabled
        ref={(ref) => {
          flatListRef.current = ref;
        }}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.image} />;
        }}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        style={styles.image}
        viewabilityConfig={viewConfig}
      />
      <Pressable onPress={handlePressLeft} style={[{ left: 5 }, styles.chevron]}>
        <Feather name="chevron-left" color={theme['color-primary-500']} size={25} />
      </Pressable>
      <Pressable onPress={handlePressRight} style={[{ right: 5 }, styles.chevron]}>
        <Feather name="chevron-right" color={theme['color-primary-500']} size={25} />
      </Pressable>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  chevron: {
    position: 'absolute',
    top: 95,
  },
  image: {
    height: 225,
    width: WIDTH,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
});
