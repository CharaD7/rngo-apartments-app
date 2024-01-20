import React, { useState } from 'react';
import { Animated, View } from 'react-native';

import { AnimatedListHeader } from '~components/AnimatedHeader';
import { Card } from '~components/Card';
import { Screen } from '~components/Screen';
import { HEADERHEIGHT, LISTMARGIN } from '~constants/ScreenConstants';
import { properties } from '~data/properties';

import MapView from 'react-native-maps';

const SearchScreen = () => {
  const [scrollAnimation] = useState(new Animated.Value(0));
  const [mapShown, setMapShown] = useState<boolean>(false);

  return (
    <Screen>
      <AnimatedListHeader
        scrollAnimation={scrollAnimation}
        setMapShown={setMapShown}
        mapShown={mapShown}
      />
      {mapShown ? (
        <View style={{ flex: 1, overflow: 'hidden' }}>
          <MapView style={{ height: '100%', width: '100%' }} />
        </View>
      ) : (
        <Animated.FlatList
          bounces={false}
          contentContainerStyle={{ paddingTop: HEADERHEIGHT - 20 }}
          data={properties}
          keyExtractor={(item) => item.id.toString()}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    y: scrollAnimation,
                  },
                },
              },
            ],
            { useNativeDriver: true },
          )}
          renderItem={({ item }) => <Card style={{ marginVertical: 5 }} property={item} />}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </Screen>
  );
};

export default SearchScreen;
