import { configureStore } from '@reduxjs/toolkit';
import settings from './slices/settings/slice';
import posts from './slices/posts/slice';

export const store = configureStore({
  reducer: {
    settings,
    posts,
  },
});

export type RootState = ReturnType<typeof store.getState>;
