import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../utils/api';

export const fetchPosts = createAsyncThunk('fetch/posts', async () => {
  const response = await api.get('/posts');
  return response.data;
});

const initialState = {
  posts: [],
  status: 'idle',
  error: null,
};

export const fetchPostSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'success';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      });
  },
});

export const postData = (state) => state.posts.posts;
export const postState = (state) => state.posts.status;
export const postError = (state) => state.posts.error;

export default fetchPostSlice.reducer;
