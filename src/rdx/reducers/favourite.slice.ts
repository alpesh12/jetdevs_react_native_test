import { createSlice } from '@reduxjs/toolkit';
import { IUsersDetail } from './home.slice';
import {
  addFavourites,
  getFavouriteUsers,
  removeFavourites,
} from '../actions/favourite';

interface IInitialState {
  favouriteUsersData: IUsersDetail[];
  isLoading: boolean;
}

const initialState = {
  favouriteUsersData: [],
  isLoading: true,
} as IInitialState;

const favouriteData = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    clearData(state) {
      state.favouriteUsersData = [];
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFavouriteUsers.pending, (state, actions) => {
        state.isLoading = true;
      })
      .addCase(getFavouriteUsers.fulfilled, (state, { payload }) => {
        state.favouriteUsersData = payload;
        state.isLoading = false;
      })
      .addCase(getFavouriteUsers.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addFavourites.pending, (state, actions) => {
        state.isLoading = true;
      })
      .addCase(addFavourites.fulfilled, (state, { payload }) => {
        state.favouriteUsersData = [...payload];
        state.isLoading = false;
      })
      .addCase(addFavourites.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(removeFavourites.pending, (state, actions) => {
        state.isLoading = true;
      })
      .addCase(removeFavourites.fulfilled, (state, { payload }) => {
        state.favouriteUsersData = [...payload];
        state.isLoading = false;
      })
      .addCase(removeFavourites.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { clearData } = favouriteData.actions;
export default favouriteData.reducer;
