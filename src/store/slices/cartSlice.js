import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
      // console.log(action.payload);
    },
    removeFromCart(state, action) {
      return state.filter((product) => {
        return product.id !== action.payload;
      });
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
