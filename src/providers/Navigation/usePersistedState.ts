import {useState, useEffect, useCallback, useRef} from 'react';
import {Linking, Platform} from 'react-native';
import {
  NavigationState,
  NavigationContainerRef,
} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

const persistanceKey = 'NAVIGATION_STATE';
export const usePersistedState = () => {
  const routeNameRef = useRef<string | null>(null);
  const navigationRef = useRef<NavigationContainerRef | null | any>(null);
  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState();

  const onStateChange = useCallback((state: NavigationState | undefined) => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = navigationRef.current.getCurrentRoute().name;

    if (previousRouteName !== currentRouteName) {
      console.log(currentRouteName);
    }

    routeNameRef.current = currentRouteName;
    AsyncStorage.setItem(persistanceKey, JSON.stringify(state));
  }, []);

  const onRef = (ref: NavigationContainerRef) => (navigationRef.current = ref);

  const onReady = () => {
    routeNameRef.current = navigationRef.current.getCurrentRoute().name;
  };

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

  return {isReady, initialState, onStateChange, onReady, onRef};
};
