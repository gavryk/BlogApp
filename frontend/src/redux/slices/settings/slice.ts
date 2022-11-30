import { createSlice } from '@reduxjs/toolkit';
import { getUserLS } from '../../../utils/getUserStorage';
import { fetchLogin, fetchRegister, fetchLogout } from './ayncAuth';
import { SettingsSliceTypes } from './types';

const initialState: SettingsSliceTypes = {
  menu: [{ title: 'Home', url: '/' }],
  auth: getUserLS(),
  menuOpened: false,
  isLoaded: true,
  errorDB: false,
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
    setError: (state, action) => {
      state.errorDB = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRegister.pending, (state) => {
      state.isLoaded = false;
    });
    builder.addCase(fetchRegister.fulfilled, (state) => {
      state.isLoaded = true;
      state.errorDB = false;
    });
    builder.addCase(fetchRegister.rejected, (state, action) => {
      state.isLoaded = true;
      state.errorDB = action.payload;
    });
    builder.addCase(fetchLogin.pending, (state) => {
      state.isLoaded = false;
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.isLoaded = true;
      state.auth = action.payload;
      state.errorDB = false;
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.isLoaded = true;
      state.auth = null;
      state.errorDB = action.payload;
    });
    builder.addCase(fetchLogout.pending, (state) => {
      state.isLoaded = false;
    });
    builder.addCase(fetchLogout.fulfilled, (state) => {
      state.isLoaded = true;
      state.auth = null;
    });
    builder.addCase(fetchLogout.rejected, (state) => {
      state.isLoaded = false;
    });
  },
});

export const { setMenuToggle } = settingsSlice.actions;

export default settingsSlice.reducer;
