import { Dimensions, Platform } from 'react-native';

export const LISTMARGIN = 10;
export const WIDTH = Dimensions.get('screen').width - LISTMARGIN * 2;
// export const HEIGHT = Dimensions.get('screen').height;

const baseHeight = 160;
const androidHeight = 180;
const iosNotch = 40;
const iosHeight = baseHeight + iosNotch;

export const HEADERHEIGHT = Platform.OS === 'ios' ? iosHeight : androidHeight;
