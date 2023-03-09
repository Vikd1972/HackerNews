/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IIdsArray {
  idsNews: number[];
}

export interface INews {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

export interface IHackerNewsState {
  idsNews: number[];
  news: INews[];
}
const initialState: IHackerNewsState = {
  idsNews: [],
  news: [],
};

export const hackerNewsSlice = createSlice({
  name: 'hackerNews',
  initialState,
  reducers: {
    addIdsNews: (state, action: PayloadAction<number[]>) => {
      state.idsNews = action.payload;
    },
    addNews: (state, action: PayloadAction<INews>) => {
      state.news.push(action.payload);
    },
  },

});

export const {
  addIdsNews,
  addNews,
} = hackerNewsSlice.actions;

export default hackerNewsSlice.reducer;
