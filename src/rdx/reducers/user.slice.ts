import { createSlice } from '@reduxjs/toolkit';
import { restoreData, signIn, signOut } from '../actions/user';
import { IUser } from '../api';

interface IInintialState {
  isLoading: boolean;
  isSignIn: boolean;
  user: IUser;
}

const initialState = {
  isLoading: true,
  isSignIn: false,
  user: {},
} as IInintialState;

const userData = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    isLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isSignIn = true;
      })
      .addCase(signIn.rejected, (state, action) => {
        console.log('signIn.rejected', signIn.rejected);
        state.isLoading = false;
        state.isSignIn = false;
      })
      .addCase(restoreData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(restoreData.fulfilled, (state, action) => {
        console.log('signIn.fullfilled');
        // state.user = action.payload;
        state.isLoading = false;
        state.isSignIn = action.payload?.signIn === true ? true : false;
      })
      .addCase(restoreData.rejected, (state, action) => {
        state.isLoading = false;
        state.isSignIn = false;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.user = initialState.user;
        state.isSignIn = false;
      });
  },
});

export const { isLoading } = userData.actions;
export default userData.reducer;
