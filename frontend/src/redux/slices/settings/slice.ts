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
  menuOpened: false,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setMenuToggle: (state, action) => {
      state.menuOpened = action.payload;
    },
  },
});

export const { setMenuToggle } = settingsSlice.actions;

export default settingsSlice.reducer;
