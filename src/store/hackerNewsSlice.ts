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
  text: string;
}

export interface IHackerNewsState {
  idsNews: number[];
  news: INews[];
  currentNews: INews;
}
const initialState: IHackerNewsState = {
  idsNews: [],
  news: [],
  currentNews: {
    by: '',
    descendants: 0,
    id: 0,
    kids: [],
    score: 0,
    time: 0,
    title: '',
    type: '',
    url: '',
    text: '',
  },
};

export const hackerNewsSlice = createSlice({
  name: 'hackerNews',
  initialState,
  reducers: {
    addIdsNews: (state, action: PayloadAction<number[]>) => {
      state.idsNews = action.payload;
    },
    resetNews: (state) => {
      state.news = initialState.news;
    },
    addNews: (state, action: PayloadAction<INews>) => {
      state.news.push(action.payload);
    },
    addCurrentNews: (state, action: PayloadAction<INews>) => {
      state.currentNews = action.payload;
    },
    resetCurrentNews: (state) => {
      state.currentNews = initialState.currentNews;
    },
  },

});

export const {
  addIdsNews,
  resetNews,
  addNews,
  addCurrentNews,
  resetCurrentNews,
} = hackerNewsSlice.actions;

export default hackerNewsSlice.reducer;
