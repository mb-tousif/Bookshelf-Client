import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/apiSlices';
import { userSlice } from './features/user/userSlice';

const store = configureStore({
  reducer: {
    auth: userSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;