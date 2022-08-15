import { configureStore, createSlice } from "@reduxjs/toolkit";
import walletReducer from "./walletSlice";

const store = configureStore({
  reducer: {
    Wallet: walletReducer,
  },
});

export default store;
