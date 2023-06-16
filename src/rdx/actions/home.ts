import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUsualObject, urlBuilder } from '../../utils/components';
import Api from '../../utils/api';

/**
 * @param {Object} 'page' | 'search' | 'parentId'
 */
export const getAllUsers = createAsyncThunk(
  'home/getUsersData',
  async (chain: IUsualObject) => {
    return await Api.home.getAllUsers(urlBuilder(chain), {});
  },
);

export const updateAllUsersData = createAsyncThunk(
  'home/updateAllUsersData',
  async (updatedUsersData: any) => {
    return updatedUsersData;
  },
);
