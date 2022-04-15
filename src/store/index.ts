import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter.reducer";
import walletReducer from "../store/wallet.reducer";


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    wallet: walletReducer
  }
});

// Infer the 'AppState' and 'AppDispatch' types from the store itself
export type AppState = ReturnType<typeof store.getState>;

// Inferred type: {counter: counterState}
export type AppDispatch = typeof store.dispatch;