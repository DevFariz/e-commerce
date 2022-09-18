import { configureStore } from '@reduxjs/toolkit';
import products from '../components/productsList/productsListSlice';

export const store = configureStore({
  reducer: { products },
  devTools: process.env.NODE_ENV !== 'production'
});
