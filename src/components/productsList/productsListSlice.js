import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/useHttp";

const initialState = {
  products: [],
  productsLoadingStatus: 'idle'
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const {request} = useHttp();
    return await request('')
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase()
  }
})