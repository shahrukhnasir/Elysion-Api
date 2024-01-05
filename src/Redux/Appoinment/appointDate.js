import { createSlice } from "@reduxjs/toolkit";

const AppointmentDateSlice = createSlice({
  name: "currentDate",
  initialState: {
    currentDate: null,
  },
  reducers: {
    setAppointmentDate: (state, action) => {
      state.currentDate = action.payload;
      localStorage.setItem("currentDate", action.payload);
    },
    removeDate: (state) => {
      state.currentDate = null;
      localStorage.removeItem("currentDate");
    },
  },
});

export const { setAppointmentDate, removeDate } = AppointmentDateSlice.actions;
export default AppointmentDateSlice.reducer;
