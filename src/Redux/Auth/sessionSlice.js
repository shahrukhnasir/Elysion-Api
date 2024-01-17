// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const sessionSlice = createSlice({
  name: 'session_id',
  initialState: {
    session: null,
  },
  reducers: {
    setSessionId: (state, action) => {
      state.session = action.payload;
      localStorage.setItem('session_id', action.payload);
    },
   
  },
});

export const { setSessionId } = sessionSlice.actions;

export default sessionSlice.reducer;