/* eslint-disable react-hooks/rules-of-hooks */
import { Dimensions, useColorScheme } from 'react-native';

import { EventEmitter } from 'fbemitter';

export const commonConstant = {
  // Screen Width And Height
  appName: 'JetDevs',
  scrWidth: Dimensions.get('screen').width,
  scrHeight: Dimensions.get('screen').height,
  statusBarHeight: 20,
  tabBarHeight: 150,

  // Other Misc Constants
  emitter: new EventEmitter(),
  appUser: null,
  favoriteList: [],
} as Record<string, any>;

export const asyncStorageKeys = {
  favoriteIDS: 'favoriteIDS',
};

export const eventListenerKeys = {
  loginListener: 'loginListener',
  logoutListener: 'logoutListener',
};

export const responseCode = {
  successCode: 200,
  signupSuccessCode: 201,
  errorCode: 400,
  internalServerCode: 500,
};

export default {
  commonConstant,
  asyncStorageKeys,
  eventListenerKeys,
};
