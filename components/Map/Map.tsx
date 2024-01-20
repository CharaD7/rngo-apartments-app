import React, { useRef, useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import { theme } from 'theme';
import { Property } from '~types/property';

import { useNavigation } from '@react-navigation/native';
import MapView from 'react-native-maps';

import MapMarker from './MapMarker';

const Map = ({ properties }: { properties: Property[] }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const mapRef = useRef<MapView | null>(null);
  const navigation = useNavigation();

  const handleMarkerPress = (index: number) => {
    // Handle animation on ios platform
    if (Platform.OS === 'ios') {
      setTimeout(() => {
        mapRef.current?.animateCamera({
          center: {
            longitude: properties[index].lng,
            latitude: properties[index].lat,
          },
        });
      }, 100);
    }

    setActiveIndex(index);
    navigation.setOptions({ tabBarStyle: { display: 'none' } });
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {properties.map((i, index) => (
          <MapMarker
            lat={i.lat}
            lng={i.lng}
            key={index}
            onPress={() => handleMarkerPress(index)}
            color={activeIndex === index ? theme['color-info-400'] : theme['color-primary-500']}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
  map: {
    height: '100%',
    width: '100%',
  },
});

export default Map;
