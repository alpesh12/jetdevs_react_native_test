import { useEffect, useRef } from 'react';
import { AppStateStatus, AppState } from 'react-native';

interface IGoToBackground {
  onReturnToApp?: () => void;
  onGoOut: () => void;
}

export const useGoIntoBackground = ({
  onGoOut,
  onReturnToApp = () => {},
}: IGoToBackground) => {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = (nextAppState: AppStateStatus) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        onReturnToApp();
      }

      if (nextAppState !== 'active') {
        onGoOut();
      }

      appState.current = nextAppState;
    };

    AppState.addEventListener('change', subscription);
    return () => {};
  }, []);
};
