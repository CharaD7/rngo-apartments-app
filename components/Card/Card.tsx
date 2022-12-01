import React from 'react';
import { View, ViewStyle } from 'react-native';

import { Property } from '../../types/property';
import { CardInfo } from '../CardInfo';
import { Carousel } from '../Carousel';

const Card = ({ property, style }: { property: Property; style?: ViewStyle }) => {
  return (
    <View style={style}>
      <Carousel images={property.images} />
      <CardInfo property={property} />
    </View>
  );
};

export default Card;
