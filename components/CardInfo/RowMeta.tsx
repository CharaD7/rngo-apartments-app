import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

const RowMeta = ({ children, style }: { children: any; style?: ViewStyle | ViewStyle[] }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default RowMeta;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
