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
  numberOfColumns: number;
  isMosaic: boolean;
  isLightTheme: boolean;
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
  numberOfColumns: 4,
  isMosaic: false,
  isLightTheme: false,
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
    changeNumberOfColumns: (state, action: PayloadAction<number>) => {
      state.numberOfColumns = action.payload;
    },
    changeOutput: (state) => {
      state.isMosaic = !state.isMosaic;
    },
    changeTheme: (state) => {
      state.isLightTheme = !state.isLightTheme;
    },
  },

});

export const {
  addIdsNews,
  resetNews,
  addNews,
  addCurrentNews,
  resetCurrentNews,
  changeNumberOfColumns,
  changeOutput,
  changeTheme,
} = hackerNewsSlice.actions;

export default hackerNewsSlice.reducer;
