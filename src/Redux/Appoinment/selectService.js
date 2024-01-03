import { createSlice } from "@reduxjs/toolkit";

const serviceSlice = createSlice({
  name: "selectService",
  initialState: {
    selectService: null,
  },
  reducers: {
    setSelectService: (state, action) => {
    state.selectService = action.payload;
    localStorage.setItem('selectService', action.payload);
    },
  },
});

export const { setSelectService } = serviceSlice.actions;
export default serviceSlice.reducer;
