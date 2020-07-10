import {useState, useEffect, useCallback} from 'react';
import {Linking, Platform} from 'react-native';
import {NavigationState} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

const persistanceKey = 'NAVIGATION_STATE';
export const usePersistedState = () => {
  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState();

  const onStateChange = useCallback(
    (state: NavigationState | undefined) =>
      AsyncStorage.setItem(persistanceKey, JSON.stringify(state)),
    [],
  );

  const restoreState = useCallback(async () => {
    try {
      const initialUrl = await Linking.getInitialURL();

      if (Platform.OS !== 'web' && initialUrl == null) {
        const savedStateString = await AsyncStorage.getItem(persistanceKey);
        const state = savedStateString
          ? JSON.parse(savedStateString)
          : undefined;

        if (state !== undefined) {
          setInitialState(state);
        }
      }
    } finally {
      setIsReady(true);
    }
  }, []);

  useEffect(() => {
    if (isReady) {
      return;
    }
    restoreState();
  }, [isReady, restoreState]);

  return {isReady, initialState, onStateChange};
};
