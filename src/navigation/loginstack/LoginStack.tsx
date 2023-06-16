import React, { FunctionComponent } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { LoginStackParamList, LoginStackScreens } from './LoginStack.types';
import { Login } from './Login/Login';

const StackNavigator = createStackNavigator<LoginStackParamList>();

const LoginStack: FunctionComponent = () => {
  return (
    <StackNavigator.Navigator
      initialRouteName={LoginStackScreens.Login}
      screenOptions={{
        headerShown: false,
      }}>
      <StackNavigator.Screen name={LoginStackScreens.Login} component={Login} />
    </StackNavigator.Navigator>
  );
};

export default LoginStack;
