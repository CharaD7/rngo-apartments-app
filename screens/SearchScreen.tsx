import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

import { EvilIcons } from '@expo/vector-icons';
import { Button, Text } from '@ui-kitten/components';

import { Screen } from '../components/Screen';
import { theme } from '../theme';

const LISTMARGIN = 10;
const WIDTH = Dimensions.get('screen').width - LISTMARGIN * 2;

const SearchScreen = () => {
  const property = {
    images: [
      'https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1466098672325-c9ddda4b7975?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    ],
    rentLow: 3750,
    rentHigh: 31054,
    bedroomLow: 1,
    bedroomHigh: 5,
    name: 'The Hamilton',
    street: '555 ME 34th St',
    city: 'Miami',
    state: 'Florida',
    zip: 33137,
    tags: ['Parking'],
  };

  return (
    <Screen style={{ marginHorizontal: LISTMARGIN }}>
      <View
        style={{
          borderColor: '#d3d3d3',
          borderRadius: 5,
          borderWidth: 1,
        }}
      >
        <Image
          source={{ uri: property.images[0] }}
          style={{ height: 250, width: WIDTH, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
        />
        <View style={{ paddingVertical: 10, paddingHorizontal: 5 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text category={'s1'}>
              ${property.rentLow.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} - $
              {property.rentHigh.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </Text>

            <EvilIcons name="heart" size={24} color={theme['color-success-500']} />
          </View>
          <Text category={'c1'}>
            {property.bedroomLow} - {property.bedroomHigh} Beds
          </Text>
          <Text category={'c1'} style={{ marginTop: 5 }}>
            {property.name}
          </Text>
          <Text category={'c1'}>{property.street}</Text>
          <Text category={'c1'}>
            {property.city}, {property.state} {property.zip}
          </Text>

          <Text category={'c1'} style={{ marginTop: 5 }}>
            {property.tags.map((tag, index) =>
              index === property.tags.length - 1 ? tag : `${tag}, `,
            )}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 5,
              justifyContent: 'space-between',
            }}
          >
            <Button
              appearance={'ghost'}
              onPress={() => console.log('Email the property manager')}
              size="small"
              style={{
                borderColor: theme['color-primary-500'],
                width: '49%',
              }}
            >
              Email
            </Button>
            <Button
              size="small"
              onPress={() => console.log('Call the property manager')}
              style={{
                width: '49%',
              }}
            >
              Call
            </Button>
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default SearchScreen;
