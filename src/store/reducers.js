import { createSlice } from '@reduxjs/toolkit';

import { loadItems, seedItems } from './actions'
import { makeId } from '../utils';

// punxy slice for global data store
export const slice = createSlice({
  name: 'punxy',
  initialState: {
    status: 'idle',
    error: null,
    items: {
      newstories: [],
      jobstories: [],
    },
    user: makeId(),
    ids: {
      newstories: [],
      jobstories: [],
    },
  },
  reducers: {},
  extraReducers: {
    // Loading...
    [loadItems.pending]: (state) => {
      state.status = 'loading';
    },
    [loadItems.fulfilled]: (state, action) => {
      const { ids, items, endpoint } = action.payload;

      if (!action.payload.items.length) {
        state.status = `endofline_${endpoint}`;

      } else {
        state.status = 'succeeded';
        state.ids[endpoint] = ids;
        state.items[endpoint] = state.items[endpoint].concat(items);
      }
    },
    [loadItems.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    // Seeding...
    [seedItems.pending]: (state) => {
      state.status = 'seeding';
    },
    [seedItems.fulfilled]: (state, action) => {
      const { ids, items, endpoint } = action.payload;

      state.status = 'succeeded';
      state.ids[endpoint] = ids;
      state.items[endpoint] = items;
    },
    [seedItems.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

// Default export is the reducer
const { reducer } = slice;

export default reducer;