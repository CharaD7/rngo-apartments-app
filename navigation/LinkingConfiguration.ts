/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { RootStackParamList } from '~types';

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Search: {
            screens: {
              SearchScreen: 'one',
            },
          },
          Saved: {
            screens: {
              SavedScreen: 'two',
            },
          },
          Account: {
            screens: {
              AccountScreen: 'two',
            },
          },
        },
      },
      // Modal: 'modal',
      // NotFound: '*',
    },
  },
};

export default linking;
