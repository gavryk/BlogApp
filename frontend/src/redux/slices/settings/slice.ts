import { createSlice } from '@reduxjs/toolkit';
import { SettingsSliceTypes } from './types';

const initialState: SettingsSliceTypes = {
  menu: [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/' },
    { title: 'Services', url: '/' },
    { title: 'Contact', url: '/' },
  ],
  auth: true,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {},
});

export default settingsSlice.reducer;
