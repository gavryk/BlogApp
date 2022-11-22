import { configureStore } from '@reduxjs/toolkit';
import settings from './slices/settings/slice';

export const store = configureStore({
  reducer: {
    settings,
  },
});

export type RootState = ReturnType<typeof store.getState>;
