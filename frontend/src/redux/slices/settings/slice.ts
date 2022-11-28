import { createSlice } from '@reduxjs/toolkit';
import { getUserLS } from '../../../utils/getUserStorage';
import { fetchLogin, fetchRegister } from './ayncAuth';
import { SettingsSliceTypes } from './types';

const initialState: SettingsSliceTypes = {
  menu: [{ title: 'Home', url: '/' }],
  auth: getUserLS(),
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
    setCurrentUser: (state, action) => {
      state.auth = action.payload;
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
    builder.addCase(fetchLogin.pending, (state) => {
      state.isLoaded = false;
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.isLoaded = true;
      state.auth = action.payload;
    });
    builder.addCase(fetchLogin.rejected, (state) => {
      state.isLoaded = false;
      state.auth = null;
    });
  },
});

export const { setMenuToggle } = settingsSlice.actions;

export default settingsSlice.reducer;
