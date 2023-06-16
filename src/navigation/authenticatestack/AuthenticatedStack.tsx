import React, { FunctionComponent, useRef } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  AuthenticatedStackParamList,
  AuthenticatedStackScreens,
} from './AuthenticatedStack.types';
import Home from './Home/Home';
import { Colors, Images, Responsive } from '../../utils/theme';
import { TabBarIcon } from '../../components/tab-icon';
import { Animated, Dimensions } from 'react-native';
import { hasNotch } from 'react-native-device-info';
import Favourite from './Favourite/Favourite';
import { TabBarHeader } from '../../components/tab-header';

const TabNavigator = createBottomTabNavigator<AuthenticatedStackParamList>();

const getWidth = () => {
  let width = Dimensions.get('window').width;
  return width / 2;
};

const AuthenticatedStack: FunctionComponent = () => {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <>
      <TabNavigator.Navigator
        initialRouteName={AuthenticatedStackScreens.Home}
        screenOptions={{
          tabBarActiveTintColor: Colors.themeBg,
          header: () => <TabBarHeader />,

          tabBarLabelStyle: {
            fontSize: Responsive.convertFontScale('15'),
            width: '100%',
            textAlign: 'center',
          },
        }}>
        <TabNavigator.Screen
          name={AuthenticatedStackScreens.Home}
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size, focused }) => (
              <TabBarIcon
                imageName={Images.homeIcon}
                color={focused ? Colors.themeBg : Colors.lightGray}
                size={size}
                focused={focused}
              />
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        <TabNavigator.Screen
          name={AuthenticatedStackScreens.Favourite}
          component={Favourite}
          options={{
            tabBarLabel: 'Favorite',
            tabBarIcon: ({ color, size, focused }) => (
              <TabBarIcon
                imageName={Images.starSolidIcon}
                color={focused ? Colors.themeBg : Colors.lightGray}
                size={size}
                focused={focused}
              />
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth(),
                useNativeDriver: true,
              }).start();
            },
          })}
        />
      </TabNavigator.Navigator>
      <Animated.View
        style={{
          width: getWidth(),
          height: 2,
          backgroundColor: Colors.themeBg,
          position: 'absolute',
          bottom: hasNotch() ? 78 : 48,
          left: 0,
          borderRadius: 20,
          transform: [{ translateX: tabOffsetValue }],
        }}></Animated.View>
    </>
  );
};

export default AuthenticatedStack;
