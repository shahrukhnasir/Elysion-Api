import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ServiceContentById } from "../../network/Network";

export const getServicesById = createAsyncThunk(
  "service/getServicesById",
  async (slug) => {
    try {
  
      const response = await ServiceContentById(slug);


      return response.data?.response?.data;
    } catch (error) {
      throw error;
    }
  }
);

const ServiceSlice = createSlice({
  name: "serviceById",
  initialState: {
    loading: false,
    serviceById: [],
    error: null,
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getServicesById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getServicesById.fulfilled, (state, action) => {
        state.loading = false;
        state.featuredProducts = action.payload;
        state.error = null;
      })
      .addCase(getServicesById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default ServiceSlice.reducer;
