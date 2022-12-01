import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

const RowMeta = ({ children, style }: { children: any; style?: ViewStyle }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default RowMeta;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
