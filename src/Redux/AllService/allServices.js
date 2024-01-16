import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AllServiceContent } from "../../network/Network";

export const getAllServices = createAsyncThunk("all/services", async () => {
  try {
    const response = await AllServiceContent();
    console.log(response, "responseresponseresponse");
    return response.data?.response?.data;
  } catch (error) {
    console.error("Error fetching all services:", error);
    throw error;
  }
});

const AllServiceSlice = createSlice({
  name: "allService",
  initialState: {
    loading: false,
    allService: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllServices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllServices.fulfilled, (state, action) => {
        state.loading = false;
        state.allService = [...action.payload];
        state.error = null;
      })
      .addCase(getAllServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default AllServiceSlice.reducer;
