import { createSlice } from "@reduxjs/toolkit";

const AppointmentDateSlice = createSlice({
  name: "currentDate",
  initialState: {
    currentDate: null,
  },
  reducers: {
    setAppointmentDate: (state, action) => {
      state.currentDate = action.payload;
    },
    
  },
});

export const { setAppointmentDate } = AppointmentDateSlice.actions;
export default AppointmentDateSlice.reducer;
