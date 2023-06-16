import { configureStore } from '@reduxjs/toolkit';
import userData from './user.slice';
import homeData from './home.slice';
import favouriteData from './favourite.slice';

export const store = configureStore({
  reducer: {
    userData,
    homeData,
    favouriteData,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
