import { createSlice } from "@reduxjs/toolkit";

const initialState = { width: window.innerWidth };

const widthSlice = createSlice({
  name: "width",
  initialState,
  reducers: {
    resize(state) {
      state.width = window.innerWidth;
    },
  },
});

export const widthActions = widthSlice.actions;

export default widthSlice;
