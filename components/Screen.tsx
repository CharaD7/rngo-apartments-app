import React from 'react';
import { Platform, SafeAreaView, StyleSheet, ViewStyle } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Screen = ({ children, style }: { children: any; style?: ViewStyle }) => {
  const insets = useSafeAreaInsets();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? insets.top : 0,
    },
  });

  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar />
      {children}
    </SafeAreaView>
  );
};
