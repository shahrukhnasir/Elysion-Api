import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: []
};

// cart slice
const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
      localStorage.setItem('cart', JSON.stringify(action.payload));
      
    },

    // add to cart
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id);

      if (itemIndex >= 0) {
        state.cart[itemIndex].qty += 1;
      } else {
        const temp = { ...action.payload, qty: 1 };
        state.cart = [...state.cart, temp];
      }
    },

    // remove particular item
    removeToCart: (state, action) => {
      const data = state.cart.filter((ele) => ele.id !== action.payload);
      state.cart = data;
    },

    // Remove single items
    removeSingleItems: (state, action) => {
      const itemIndexDec = state.cart.findIndex((item) => item.id === action.payload.id);

      if (state.cart[itemIndexDec].qty >= 1) {
        state.cart[itemIndexDec].qty -= 1;
      }
    },

    // clear cart
    emptyCartItems: (state, action) => {
      state.cart = [];
    }
  }
});

export const {
  setCart,
  addToCart,
  removeToCart,
  removeSingleItems,
  emptyCartItems
} = cartSlice.actions;

export default cartSlice.reducer;
