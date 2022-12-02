import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('auth/fetchPosts', async (params: string) => {
  try {
    const { data } = await axios.get(`/api/posts?category=${params}`);
    return data;
  } catch (err) {
    console.log(err);
  }
});
