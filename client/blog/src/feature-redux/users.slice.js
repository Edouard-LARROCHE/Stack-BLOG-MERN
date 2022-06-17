import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: null,
  },
  reducers: {
    setUsersData: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { setUsersData } = usersSlice.actions;
export default usersSlice.reducer;
