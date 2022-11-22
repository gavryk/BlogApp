import { createSlice } from '@reduxjs/toolkit';
import { SettingsSliceTypes } from './types';

const initialState: SettingsSliceTypes = {
  menu: [
    { title: 'Test', url: '/' },
    { title: 'logout', url: '/' },
  ],
  auth: false,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {},
});

export default settingsSlice.reducer;
