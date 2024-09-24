import { configureStore } from "@reduxjs/toolkit";
import { makeOrdered, makeOrderedSlice } from "./makeOrderedSlice";

export const store = configureStore({
  reducer: {
    [makeOrdered.name]: makeOrderedSlice.reducer,
  },
});
