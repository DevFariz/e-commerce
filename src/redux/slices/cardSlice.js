import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
    },
  },
});

export const { addProduct } = cardSlice.actions;

export default cardSlice.reducer;
