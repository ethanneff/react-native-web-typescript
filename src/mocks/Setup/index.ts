import 'react-native-gesture-handler/jestSetup';

jest.useFakeTimers();

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => undefined;
  return Reanimated;
});

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

export const mockNavigation = {
  goBack: jest.fn(),
  navigate: jest.fn(),
  push: jest.fn(),
  popToTop: jest.fn(),
};
jest.mock('@react-navigation/native', () => {
  return {
    useRoute: () => jest.fn(),
    useNavigation: () => ({
      goBack: mockNavigation.goBack,
      navigate: mockNavigation.navigate,
      push: mockNavigation.push,
      popToTop: mockNavigation.popToTop,
    }),
  };
});
