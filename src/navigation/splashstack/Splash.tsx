import React, { FunctionComponent, useEffect, useState } from 'react';
import { SplashImage, SplashView } from './Splash.style';
import { StackScreenProps } from '@react-navigation/stack';
import { Images } from '../../utils/theme';
import {
  RootStackParamList,
  RootStackScreens,
} from '../rootstack/RootNavigationStack.types';
import { useAppSelector } from '../../hooks';

const DELAY_BEFORE_NAV_MS = 5000;

type SplashProps = StackScreenProps<
  RootStackParamList,
  RootStackScreens.Splash
>;

export const Splash: FunctionComponent<SplashProps> = ({
  navigation,
}: SplashProps) => {
  const [hasAwaitedScreen, setHasAwaitedScreen] = useState<boolean>(false);
  const { isSignIn, isLoading } = useAppSelector((state) => state.userData);
  useEffect(() => {
    setTimeout(() => {
      setHasAwaitedScreen(true);
    }, DELAY_BEFORE_NAV_MS);
  }, []);

  return (
    <SplashView>
      <SplashImage source={Images.iconImage} />
    </SplashView>
  );
};

export default Splash;
