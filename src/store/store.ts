import { configureStore } from '@reduxjs/toolkit';
import hackerNewsReducer from './hackerNewsSlice';

const store = configureStore({
  reducer: {
    hackerNews: hackerNewsReducer,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

export { store };
