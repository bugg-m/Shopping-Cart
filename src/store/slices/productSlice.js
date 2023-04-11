import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// const dispatch = useDispatch();
export const STATUSES = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    // setProducts(state, action) {
    //   state.data = action.payload;
    // },
    // setStatus(state, action) {
    //   state.status = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export default productSlice.reducer;
export const { setProducts, setStatus } = productSlice.actions;

// thunks

export const getProducts = createAsyncThunk("product/fetch", async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  // dispatch(setProducts(res.data));
  return res.data;
});

// export const getProducts = () => {
//   return async function getProductThunk(dispatch, getstate) {
//     dispatch(setStatus(STATUSES.LOADING));
//     try {
//       const res = await axios.get("https://fakestoreapi.com/products");
//       dispatch(setProducts(res.data));
//       dispatch(setStatus(STATUSES.IDLE));
//     } catch (error) {
//       console.log(error);
//       dispatch(setStatus(STATUSES.ERROR));
//     }
//   };
// };
