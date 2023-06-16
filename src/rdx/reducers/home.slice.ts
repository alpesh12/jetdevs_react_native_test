import { createSlice } from '@reduxjs/toolkit';
import { getAllUsers, updateAllUsersData } from '../actions/home';

interface IInitialState {
  allUsersData: IUsersDetail[];
  isLoading: boolean;
}

export interface IUsersDetail {
  gender: string;
  name: IUserNameData;
  location: ILocationData;
  email: string;
  login?: any;
  dob: IDate;
  registered: IDate;
  phone: string;
  cell: string;
  id: any;
  picture: IPicture;
  nat: string;
  isFavourite: boolean;
}

export interface IUsualObject {
  [key: string]: string;
}

export interface IUserNameData {
  title: string;
  first: string;
  last: string;
}

export interface ILocationData {
  street: any;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: any;
  timezone: any;
}

export interface IDate {
  date: string;
  age: number;
}

export interface IPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

const initialState = {
  allUsersData: [],
  isLoading: true,
} as IInitialState;

const homeData = createSlice({
  name: 'home',
  initialState,
  reducers: {
    clearData(state) {
      state.allUsersData = [];
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state, actions) => {
        state.isLoading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, { payload }) => {
        state.allUsersData = [...state.allUsersData, ...payload.results];
        state.isLoading = false;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(updateAllUsersData.pending, (state, actions) => {
        state.isLoading = true;
      })
      .addCase(updateAllUsersData.fulfilled, (state, { payload }) => {
        state.allUsersData = [...payload];
        state.isLoading = false;
      })
      .addCase(updateAllUsersData.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { clearData } = homeData.actions;
export default homeData.reducer;
