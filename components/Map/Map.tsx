import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Property } from '~types/property';

import MapView from 'react-native-maps';

const Map = ({ properties }: { properties: Property[] }) => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}></MapView>
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
