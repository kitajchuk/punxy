import { createAsyncThunk } from '@reduxjs/toolkit';

import { getIds, getItems } from './api';

export const loadItems = createAsyncThunk('punxy/loadItems', async (args, thunkAPI) => {
  const { endpoint } = args;
  const { punxy } = thunkAPI.getState();
  const offset = punxy.items[endpoint].length;
  let ids = punxy.ids[endpoint];
  let items;

  if (!ids.length) {
    ids = await getIds(endpoint);
  }

  items = await getItems(ids, offset);

  return { ids, items, endpoint };
});

export const refreshItems = createAsyncThunk('punxy/refreshItems', async (args) => {
  const { endpoint } = args;
  const ids = await getIds(endpoint);
  const items = await getItems(ids, 0);

  return { ids, items, endpoint };
});