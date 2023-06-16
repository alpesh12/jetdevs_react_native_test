import { createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IUsersDetail } from '../reducers/home.slice';

/**
 * @param {Object} 'page' | 'search' | 'parentId'
 */
export const getFavouriteUsers = createAsyncThunk(
  'favourite/getFavouriteUsers',
  async (_, state) => {
    try {
      const usersData = await getFavouriteInfo();
      return usersData;
    } catch (error) {}
  },
);

export const addFavourites = createAsyncThunk(
  'favourite/addFavouriteUsers',
  async (data: IUsersDetail) => {
    const usersData = await getFavouriteInfo();
    let datas = [...usersData, data];
    return saveInfo(datas);
  },
);

export const removeFavourites = createAsyncThunk(
  'favourite/removeFavouriteUsers',
  async (data: IUsersDetail) => {
    const usersData = await getFavouriteInfo();
    const emailToFind = data.email;
    const indexToRemove = usersData.findIndex(
      (item: IUsersDetail) => item.email === emailToFind,
    );
    usersData.splice(indexToRemove, 1);

    return saveInfo(usersData);
  },
);

export const getFavouriteInfo = async () => {
  const data = await AsyncStorage.getItem('favouriteUsers');
  return data !== null ? JSON.parse(data) : [];
};

const saveInfo = async (data: IUsersDetail[]) => {
  return setInfo(data);
};

const setInfo = async (users: any) => {
  try {
    await AsyncStorage.setItem('favouriteUsers', JSON.stringify(users));
  } catch (err) {
    throw err;
  }
  return users;
};
