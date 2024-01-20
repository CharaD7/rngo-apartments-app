import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

import { CardMeta } from '~components/CardInfo';
import { Carousel } from '~components/Carousel';
import { LISTMARGIN } from '~constants/ScreenConstants';
import { Property } from '~types/property';

const Card = ({ property, style }: { property: Property; style?: ViewStyle }) => {
  return (
    <View style={[styles.container, style]}>
      <Carousel images={property.images} />
      <CardMeta property={property} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: LISTMARGIN,
    borderRadius: 5,
    backgroundColor: 'white',
  },
});

export default Card;
