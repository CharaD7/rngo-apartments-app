import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { Button, Text } from '@ui-kitten/components';

import { theme } from '../../theme';
import { Property } from '../../types/property';
import RowMeta from './RowMeta';

const CardInfo = ({ property }: { property: Property }) => {
  return (
    <View style={styles.container}>
      <RowMeta>
        <Text category={'s1'}>
          ${property.rentLow.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} - $
          {property.rentHigh.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </Text>

        <Feather name="heart" size={20} color={theme['color-success-600']} />
      </RowMeta>
      <Text category={'c1'}>
        {property.bedroomLow} - {property.bedroomHigh} Beds
      </Text>
      <Text category={'c1'} style={styles.defaultMarginTop}>
        {property.name}
      </Text>
      <Text category={'c1'}>{property.street}</Text>
      <Text category={'c1'}>
        {property.city}, {property.state} {property.zip}
      </Text>

      <Text category={'c1'} style={styles.defaultMarginTop}>
        {property.tags.map((tag, index) => (index === property.tags.length - 1 ? tag : `${tag}, `))}
      </Text>

      <RowMeta style={styles.defaultMarginTop}>
        <Button
          appearance={'ghost'}
          onPress={() => console.log('Email the property manager')}
          size="small"
          style={[styles.buttonView, styles.width, { borderColor: theme['color-primary-500'] }]}
        >
          Email
        </Button>
        <Button
          size="small"
          onPress={() => console.log('Call the property manager')}
          style={[styles.buttonView, styles.width]}
        >
          Call
        </Button>
      </RowMeta>
    </View>
  );
};

export default CardInfo;

const styles = StyleSheet.create({
  buttonView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    borderColor: '#d3d3d3',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderWidth: 1,
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  defaultMarginTop: {
    marginTop: 5,
  },
  width: {
    width: '49%',
  },
});
