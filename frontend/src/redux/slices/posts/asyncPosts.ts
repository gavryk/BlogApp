import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('auth/fetchPosts', async (params: string) => {
  console.log(params);

  try {
    const { data } = await axios.get(`/api/posts${params}`);
    return data;
  } catch (err) {
    console.log(err);
  }
});
