import { createSlice } from "@reduxjs/toolkit";

const appointmentSlice = createSlice({
  name: "appointment",
  initialState: {
    appointment: [],
  },
  reducers: {
    setAppointmentDetails: (state, action) => {
      return {
        ...state,
        appointment: action.payload,
      };
    },
  },
});

export const { setAppointmentDetails } = appointmentSlice.actions;
export default appointmentSlice.reducer;
