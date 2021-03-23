import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { makeId } from './utils';
import api from './api';

/*
{
  status: 'idle' | 'loading' | 'succeeded' | 'failed' | 'endofline_{endpoint}' | 'seeding',
  error: string | null
}
*/
export const loadItems = createAsyncThunk('punxy/loadItems', async (args, thunkAPI) => {
  const { endpoint } = args;
  const offset = thunkAPI.getState().punxy.items[endpoint].length;
  const data = await api.getItems(endpoint, offset);
  return {
    data,
    endpoint,
  };
});

export const seedItems = createAsyncThunk('punxy/seedItems', async (args) => {
  const { endpoint } = args;
  const data = await api.getItems(endpoint, 0, api.perPage, true);
  return {
    data,
    endpoint,
  };
});

// shared reducers
const errorReducer = (state, action) => {
  state.status = 'failed';
  state.error = action.error.message;
};

// punxy slice for global data store
export const punxySlice = createSlice({
  name: 'punxy',
  initialState: {
    items: {
      newstories: [],
      jobstories: [],
    },
    status: 'idle',
    error: null,
    user: makeId(),
  },
  reducers: {},
  extraReducers: {
    // Loading...
    [loadItems.pending]: (state) => {
      state.status = 'loading';
    },
    [loadItems.fulfilled]: (state, action) => {
      if (!action.payload.data.length) {
        state.status = `endofline_${action.payload.endpoint}`;

      } else {
        state.status = 'succeeded';
        state.items[action.payload.endpoint] = state.items[action.payload.endpoint].concat(action.payload.data);
      }
    },
    [loadItems.rejected]: errorReducer,
    // Seeding...
    [seedItems.pending]: (state) => {
      state.status = 'seeding';
    },
    [seedItems.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.items[action.payload.endpoint] = action.payload.data;
    },
    [seedItems.rejected]: errorReducer,
  },
});

// Select helpers for extracting punxy data units
export const selectUser = (state) => state.punxy.user;
export const selectStatus = (state) => state.punxy.status;
export const selectItems = (endpoint) => (state) => state.punxy.items[endpoint];