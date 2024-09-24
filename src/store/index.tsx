import { configureStore } from "@reduxjs/toolkit";
import { makeOrderedSlice } from "./makeOrderedSlice"; 

export const store = configureStore({
  reducer: {
    makeOrdered: makeOrderedSlice.reducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;