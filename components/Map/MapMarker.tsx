import React from 'react';

import { Feather } from '@expo/vector-icons';
import { Marker } from 'react-native-maps';

const MapMarker = ({
  lat,
  lng,
  onPress,
  color,
}: {
  lat: number;
  lng: number;
  onPress: () => void;
  color: string;
}) => {
  return (
    <Marker coordinate={{ latitude: lat, longitude: lng }} onPress={onPress}>
      <Feather name="map-pin" size={32} color={color} />
    </Marker>
  );
};

export default MapMarker;
