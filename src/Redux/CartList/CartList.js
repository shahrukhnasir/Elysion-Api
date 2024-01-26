// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    setCartList: (state, action) => {
      state.cart = action.payload;
      localStorage.setItem('cart', JSON.stringify(action.payload));
    },
    removedAllCart: (state) => {
      state.cart = null;
      localStorage.removeItem('cart');
    },
  },
});

export const { setCartList ,removedAllCart} = CartSlice.actions;

export const selectCartList = (state) => state.cart?.cart;

export default CartSlice.reducer;
