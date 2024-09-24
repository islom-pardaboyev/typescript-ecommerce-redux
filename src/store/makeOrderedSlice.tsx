import { createSlice } from "@reduxjs/toolkit";
import { ProductTypes } from "../types";
import { toast } from "react-toastify";

const initialState = {
  products: [] as Array<ProductTypes>,
};

export const makeOrderedSlice = createSlice({
  name: "makeOrdered",
  initialState,
  reducers: {
    makeOrdered: (state, action) => {
      const productExists = state.products.some(
        (item) => item.id === action.payload.id
      );
      if (!productExists) {
        toast.success("Added Successfully");
        console.log("added");
        action.payload.isLiked = !action.payload.isLiked;
        state.products.push(action.payload);
      } else {
        console.log("Product already ordered");
        toast.error("Product Already Exist");
      }
    },
    unmakeOrdered: (state, action) => {
      const productIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(productIndex);
      return {
        products: state.products.filter((_, index) => index !== productIndex),
      };
    },
  },
});

export const { makeOrdered, unmakeOrdered } = makeOrderedSlice.actions;
export default makeOrderedSlice.reducer;
