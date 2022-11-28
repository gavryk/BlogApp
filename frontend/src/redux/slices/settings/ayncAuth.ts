import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RegisterFormValues } from './types';

export const fetchRegister = createAsyncThunk(
  'auth/fetchRegisterUser',
  async (params: RegisterFormValues) => {
    try {
      const res = await axios.post('/api/auth/register', params);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  },
);
