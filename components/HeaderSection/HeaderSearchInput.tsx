import React from 'react';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { Text } from '@ui-kitten/components';

import { theme } from '../../theme';
import { RowMeta } from '../CardInfo';

const HeaderSearchInput = () => {
  return (
    <TouchableOpacity
      onPress={() => console.log('navigate to input screen')}
      style={styles.container}
    >
      <RowMeta style={{ alignItems: 'center' }}>
        <Feather name="search" color={theme['color-primary-500']} size={20} />
        <Text style={{ right: 250, color: theme['color-gray'] }}>Find a Location</Text>
      </RowMeta>
    </TouchableOpacity>
  );
};

export default HeaderSearchInput;

const styles = StyleSheet.create({
  container: {
    borderColor: theme['color-gray'],
    borderRadius: 30,
    borderWidth: 1,
    marginTop: Platform.OS === 'ios' ? 50 : 40,
    padding: 10,
  },
});
