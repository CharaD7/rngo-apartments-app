import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { Button } from '@ui-kitten/components';

import { theme } from '../../theme';

const HeaderFilterButton = () => {
  const filterButtons = [
    {
      iconName: 'sliders',
      onPress: () => console.log('filter all'),
    },
    {
      label: 'Price',
      onPress: () => console.log('price'),
    },
    {
      label: 'Beds & Baths',
      onPress: () => console.log('beds & baths'),
    },
    {
      label: 'Move-in Date',
      onPress: () => console.log('move-in date'),
    },
    {
      label: 'Pets',
      onPress: () => console.log('pets'),
    },
  ];

  return (
    <FlatList
      data={filterButtons}
      horizontal
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item, index }) => {
        if (item.iconName) {
          return (
            <Button
              accessoryLeft={
                <Feather name={item.iconName as any} size={20} color={theme['color-primary-500']} />
              }
              appearance={'ghost'}
              onPress={item.onPress}
              style={[styles.filterBtnStyle, { width: 48 }]}
            ></Button>
          );
        }
        return (
          <Button appearance={'ghost'} onPress={item.onPress} style={styles.filterBtnStyle}>
            {item.label}
          </Button>
        );
      }}
      showsHorizontalScrollIndicator={false}
      style={{ marginVertical: 10 }}
    />
  );
};

export default HeaderFilterButton;

const styles = StyleSheet.create({
  filterBtnStyle: {
    borderColor: theme['color-gray'],
    borderRadius: 30,
    marginHorizontal: 3,
  },
});
