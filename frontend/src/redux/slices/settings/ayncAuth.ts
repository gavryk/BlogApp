import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { LoginFormValues, RegisterFormValues } from './types';

export const fetchRegister = createAsyncThunk(
  'auth/fetchRegisterUser',
  async (params: RegisterFormValues, { rejectWithValue }) => {
    try {
      await axios.post('/api/auth/register', params);
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const fetchLogin = createAsyncThunk(
  'auth/fetchLoginUser',
  async (params: LoginFormValues, { rejectWithValue }) => {
    try {
      const res = await axios.post('/api/auth/login', params);
      localStorage.setItem('user', JSON.stringify(res.data));
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const fetchLogout = createAsyncThunk('auth/fetchLogoutUser', async () => {
  try {
    await axios.post('/api/auth/logout');
    localStorage.removeItem('user');
  } catch (err) {
    console.log(err);
  }
});
