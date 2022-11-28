import { createSlice } from '@reduxjs/toolkit';
import { fetchRegister } from './ayncAuth';
import { SettingsSliceTypes } from './types';

const initialState: SettingsSliceTypes = {
  menu: [{ title: 'Home', url: '/' }],
  auth: false,
  menuOpened: false,
  isLoaded: true,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setMenuToggle: (state, action) => {
      state.menuOpened = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRegister.pending, (state) => {
      state.isLoaded = false;
    });
    builder.addCase(fetchRegister.fulfilled, (state) => {
      state.isLoaded = true;
    });
    builder.addCase(fetchRegister.rejected, (state) => {
      state.isLoaded = false;
    });
  },
});

export const { setMenuToggle } = settingsSlice.actions;

export default settingsSlice.reducer;
