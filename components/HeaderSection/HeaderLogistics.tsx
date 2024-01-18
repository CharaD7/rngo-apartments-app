import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { RowMeta } from '~components/CardInfo';
import { LISTMARGIN } from '~constants/ScreenConstants';

import { Feather } from '@expo/vector-icons';
import { Text } from '@ui-kitten/components';

import { theme } from '../../theme';

const HeaderLogisticsButton = ({
  iconName,
  label,
  onPress,
  style,
}: {
  iconName?: any;
  label: string;
  onPress: () => void;
  style?: any;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <RowMeta style={[styles.center, style]}>
        {iconName ? <Feather name={iconName} color={theme['color-info-500']} size={18} /> : null}
        <Text category={'c1'} style={styles.boldInfo}>
          {' '}
          {label}{' '}
        </Text>
      </RowMeta>
    </TouchableOpacity>
  );
};

const HeaderLogistics = ({
  mapShown,
  setMapShown,
}: {
  mapShown: boolean;
  setMapShown: (mapShown: boolean) => void;
}) => {
  const handleMapToggle = () => {
    if (mapShown) return setMapShown(false);
    setMapShown(true);
  };

  return (
    <RowMeta style={styles.container}>
      <RowMeta style={styles.center}>
        <Feather color={theme['color-primary-500']} name="map-pin" size={18} />
        <Text category={'c1'} appearance={'hint'}>
          12 Available
        </Text>
        <HeaderLogisticsButton
          label="Save"
          onPress={() => console.log('save')}
          style={{ marginLeft: 5 }}
        />
      </RowMeta>
      <RowMeta>
        <HeaderLogisticsButton
          iconName="layers"
          label="Sort"
          onPress={() => console.log('sort')}
          style={{ marginHorizontal: LISTMARGIN }}
        />
        {mapShown ? (
          <HeaderLogisticsButton iconName="list" label="List" onPress={handleMapToggle} />
        ) : (
          <HeaderLogisticsButton iconName="map" label="Map" onPress={handleMapToggle} />
        )}
        {/* <HeaderLogisticsButton iconName="map" label="Map" onPress={() => console.log('map')} /> */}
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
    marginLeft: 5,
  },
  center: {
    alignItems: 'center',
  },
});

export default HeaderLogistics;
