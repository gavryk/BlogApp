import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (params: string) => {
  try {
    const { data } = await axios.get(`/api/posts?category=${params}`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const fetchAddPost = createAsyncThunk('posts/fetchAddPost', async (params: any) => {
  const { title, desc, category, img, date } = params;
  try {
    await axios.post(`/api/posts`, {
      title,
      desc,
      category,
      img,
      date,
    });
  } catch (err) {
    console.log(err);
  }
});

export const fetchUpdatePost = createAsyncThunk('posts/fetchUpdatePost', async (params: any) => {
  const { id, title, desc, category, img } = params;
  try {
    await axios.put(`/api/posts/${id}`, {
      title,
      desc,
      category,
      img,
    });
  } catch (err) {
    console.log(err);
  }
});
