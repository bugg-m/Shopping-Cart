import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      console.log(action.payload);
      let present = false;
      for (let i = 0; i < state.length; i++) {
        console.log("current length of store is ", state.length);
        console.log("for loop la result", state[i]);
        if (state[i].id === action.payload.id) {
          present = true;
          state[i].quantity += 1;
        }
      }
      if (!present) state.push(action.payload);
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
