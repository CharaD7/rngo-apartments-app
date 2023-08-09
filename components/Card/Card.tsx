import React from 'react';
import { View, ViewStyle } from 'react-native';

import { CardInfo } from 'components/CardInfo';
import { Carousel } from 'components/Carousel';
import { Property } from 'types/property';

const Card = ({ property, style }: { property: Property; style?: ViewStyle }) => {
  return (
    <View style={style}>
      <Carousel images={property.images} />
      <CardInfo property={property} />
    </View>
  );
};

export default Card;
