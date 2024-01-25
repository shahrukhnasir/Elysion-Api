// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: null,
  },
  reducers: {
    setCartList: (state, action) => {
      state.cart = action.payload;
      localStorage.setItem('cart', JSON.stringify(action.payload));
    },
  },
});

export const { setCartList } = CartSlice.actions;

export const selectCartList = (state) => state.cart?.cart;

export default CartSlice.reducer;
