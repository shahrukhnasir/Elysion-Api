// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authToken: null,
  },
  reducers: {
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
      localStorage.setItem('authToken', action.payload);
    },
    logout: (state) => {
      state.authToken = null;
      localStorage.removeItem('authToken');
    },
  },
});

export const { setAuthToken, logout } = authSlice.actions;
export const selectAuthToken = (state) => state.auth.authToken;

export default authSlice.reducer;