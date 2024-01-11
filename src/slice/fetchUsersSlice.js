import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../utils/api';

export const fetchUsers = createAsyncThunk('fetch/users', async () => {
  const response = await api.get('/users');
  return response.data;
});

const initialState = {
  users: [],
};

const fetchUsersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const seletedAllUsers = (state) => state.users.users;

export default fetchUsersSlice.reducer;
