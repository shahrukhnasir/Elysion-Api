import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MyProfile } from "../../network/Network";

export const getProfile = createAsyncThunk("profile/user", async (token) => {
  try {
    const response = await MyProfile(token);
    return response.data?.response?.data;
  } catch (error) {
    console.error("Error fetching all services:", error);
    throw error;
  }
});

const ProfileSlice = createSlice({
  name: "profile",
  initialState: {
    loading: false,
    profile: {}, 
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = { ...action.payload };  // Change here
        state.error = null;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default ProfileSlice.reducer;
