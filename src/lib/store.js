import { configureStore } from '@reduxjs/toolkit';
import { punxySlice } from './slices';

export default configureStore({
  reducer: {
    punxy: punxySlice.reducer,
  },
});