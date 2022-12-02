import { fetchPosts } from './asyncPosts';
import { createSlice } from '@reduxjs/toolkit';
import { PostsSliceTypes } from './types';

const initialState: PostsSliceTypes = {
  posts: [],
  activeCat: '',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setCategory: (state, action) => {
      state.activeCat = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.posts = [];
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.posts = [];
    });
  },
});

export const { setPosts, setCategory } = postsSlice.actions;

export default postsSlice.reducer;
