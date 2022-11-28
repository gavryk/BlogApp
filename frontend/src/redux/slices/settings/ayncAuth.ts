import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { LoginFormValues, RegisterFormValues } from './types';

export const fetchRegister = createAsyncThunk(
  'auth/fetchRegisterUser',
  async (params: RegisterFormValues) => {
    try {
      await axios.post('/api/auth/register', params);
    } catch (err) {
      console.log(err);
    }
  },
);

export const fetchLogin = createAsyncThunk(
  'auth/fetchLoginUser',
  async (params: LoginFormValues) => {
    try {
      await axios.post('/api/auth/login', params);
    } catch (err) {
      console.log(err);
    }
  },
);
