import React, { FunctionComponent, useEffect, useRef, useState } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import {
  RootStackParamList,
  RootStackScreens,
} from './RootNavigationStack.types';
import { Splash } from '../splashstack/Splash';
import { HeightContext } from '../../context/heightContext';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import { actions } from '../../rdx';
import { navigationContainerRef } from './helpers';
import AuthenticatedStack from '../authenticatestack/AuthenticatedStack';
import LoginStack from '../loginstack/LoginStack';

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigationStack = () => {
  const { restoreData } = useAppDispatch(actions.userActions);
  const [heightfullscreenWorkplace, setHeightfullscreenWorkplace] = useState(0);
  const { isSignIn } = useAppSelector((state) => state.userData);
  const [loading, setLoading] = useState(true);

  const changeHeight = (_height: number) => {
    setHeightfullscreenWorkplace(_height);
  };

  useEffect(() => {
    setTimeout(() => {
      restoreData().finally(() => {
        console.log('isSignIn', isSignIn);
        setLoading(false);
      });
    }, 5000);
  }, []);

  useEffect(() => {
    console.log('isSignIn', isSignIn);
  }, [isSignIn]);

  return (
    <HeightContext.Provider
      value={{ height: heightfullscreenWorkplace, changeHeight }}>
      <NavigationContainer ref={navigationContainerRef}>
        <RootStack.Navigator
          initialRouteName={RootStackScreens.Splash}
          screenOptions={{
            headerShown: false,
          }}>
          <>
            {loading ? (
              <RootStack.Screen
                name={RootStackScreens.Splash}
                component={Splash}
              />
            ) : !isSignIn ? (
              <RootStack.Screen
                name={RootStackScreens.LoginStack}
                component={LoginStack}
                options={{
                  animationTypeForReplace: 'push',
                }}
              />
            ) : (
              <RootStack.Screen
                name={RootStackScreens.AuthenticatedStack}
                component={AuthenticatedStack}
                options={{
                  animationTypeForReplace: 'push',
                }}
              />
            )}
          </>
        </RootStack.Navigator>
      </NavigationContainer>
    </HeightContext.Provider>
  );
};

export default RootNavigationStack;

{
  /* <RootStack.Navigator
initialRouteName={RootStackScreens.Splash}
screenOptions={{
  headerShown: false,
}}>
<RootStack.Group>
  <RootStack.Screen
    name={RootStackScreens.Splash}
    component={Splash}
  />

  <RootStack.Screen
    name={RootStackScreens.LoginStack}
    component={LoginStack}
  />
<RootStack.Screen
name={RootStackScreens.AuthenticatedStack}
component={AuthenticatedStack}
/> 
</RootStack.Group>
</RootStack.Navigator> */
}
