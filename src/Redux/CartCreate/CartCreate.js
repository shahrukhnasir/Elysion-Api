import { createSlice } from '@reduxjs/toolkit';

const cartVariantSlice = createSlice({
    name: 'cartVariant',
    initialState: {
      cartVariant: [],
    },
    reducers: {
    setVarId: (state, action) => {
      state.cartVariant = action.payload;
    },
    setPrductId: (state, action) => {
      state.cartVariant = action.payload;
    },
    setMiligramId: (state, action) => {
      state.cartVariant = action.payload;
    },
    setQty: (state, action) => {
      state.cartVariant = action.payload;
    },
  },
});

export const { setVarId,setPrductId ,setMiligramId,setQty, } = cartVariantSlice.actions;
export default cartVariantSlice.reducer;
