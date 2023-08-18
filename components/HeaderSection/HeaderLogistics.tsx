import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { RowMeta } from '~components/CardInfo';
import { LISTMARGIN } from '~constants/ScreenConstants';

import { Feather } from '@expo/vector-icons';
import { Text } from '@ui-kitten/components';

import { theme } from '../../theme';

const HeaderLogistics = () => {
  return (
    <RowMeta style={styles.container}>
      <RowMeta style={styles.center}>
        <Feather color={theme['color-primary-500']} name="map-pin" size={18} />
        <Text category={'c1'} appearance={'hint'}>
          12 Available
        </Text>
        <TouchableOpacity onPress={() => console.log('save')}>
          <Text category={'c1'} style={[styles.boldInfo, { marginLeft: 5 }]}>
            {' '}
            Save{' '}
          </Text>
        </TouchableOpacity>
      </RowMeta>
      <RowMeta>
        <TouchableOpacity onPress={() => console.log('sort')}>
          <RowMeta style={[styles.center, { marginHorizontal: LISTMARGIN }]}>
            <Feather name="layers" color={theme['color-info-500']} size={18} />
            <Text category={'c1'} style={styles.boldInfo}>
              {' '}
              Sort{' '}
            </Text>
          </RowMeta>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('map')}>
          <RowMeta style={[styles.center, { marginLeft: 10 }]}>
            <Feather name="map" color={theme['color-info-500']} size={18} />
            <Text category={'c1'} style={styles.boldInfo}>
              {' '}
              Map{' '}
            </Text>
          </RowMeta>
        </TouchableOpacity>
      </RowMeta>
    </RowMeta>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: LISTMARGIN,
    marginVertical: 5,
  },
  boldInfo: {
    color: theme['color-info-500'],
    fontWeight: 'bold',
  },
  center: {
    alignItems: 'center',
  },
});

export default HeaderLogistics;
