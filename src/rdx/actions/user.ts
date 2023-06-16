import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ILogin } from '../api/index';
import { NetInfoState } from '@react-native-community/netinfo';

export const restoreData = createAsyncThunk(
  'userData/restoreData',
  async (_, state) => {
    try {
      const signIn = await getInfo();
      console.log('restoreData', signIn);
      return { signIn: !!signIn, userInfo: signIn };
    } catch (error) {}
  },
);

export const signIn = createAsyncThunk(
  'userData/signIn',
  async (data: ILogin) => {
    if (
      data.email === 'reactnative@jetdevs.com' &&
      data.password === 'jetdevs@123'
    ) {
      return saveInfo(data);
    } else {
      throw new Error('Please Enter Valid Details');
    }
  },
);

export const signOut = createAsyncThunk('userData/signOut', async () => {
  try {
    await AsyncStorage.multiRemove(['userInfo']);
  } catch (error) {}
});

const saveInfo = async (data: ILogin) => {
  return setInfo(data);
};

const setInfo = async (userInfo: any) => {
  try {
    await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
  } catch (err) {
    throw err;
  }
  return userInfo;
};

export const getInfo = async () => {
  const data = await AsyncStorage.getItem('userInfo');
  return data !== null ? JSON.parse(data) : null;
};

export const setInternetConnectionStatus = (isConnected: NetInfoState) => {
  return { type: 'internetStatus', payload: isConnected };
};
