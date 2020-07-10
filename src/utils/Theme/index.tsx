import {Platform} from 'react-native';

const center = Platform.OS === 'web' ? {height: '100vh'} : {flex: 1};
export const Theme = {
  center,
};
