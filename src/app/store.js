import { configureStore } from '@reduxjs/toolkit';
import fetchUsersSlice from '../slice/fetchUsersSlice';
import fetchPostsSlice from '../slice/fetchPostsSlice';
import searchSlice from '../slice/searchSlice';

export const store = configureStore({
  reducer: {
    users: fetchUsersSlice,
    posts: fetchPostsSlice,
    searchTerm: searchSlice,
  },
});
