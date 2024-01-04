import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ServiceContentById } from "../../network/Network";

export const getAllAServices = createAsyncThunk(
  "allService/getAllService",
  async (slug) => {
    try {
      console.log(slug);
      const response = await ServiceContentById(slug);
      console.log("pro", response.data?.response?.data);

      return response.data?.response?.data;
    } catch (error) {
      throw error;
    }
  }
);

const AllServiceSlice = createSlice({
  name: "allService",
  initialState: {
    loading: false,
    allServices: [],
    error: null,
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllAServices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllAServices.fulfilled, (state, action) => {
        state.loading = false;
        state.featuredProducts = action.payload;
        state.error = null;
      })
      .addCase(getAllAServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default AllServiceSlice.reducer;
