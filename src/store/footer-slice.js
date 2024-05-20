import { createSlice } from "@reduxjs/toolkit";

const initialState = { card: true };

const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {
    hide(state) {
      state.card = false;
    },
    show(state) {
      state.card = true;
    },
  },
});

export const footerActions = footerSlice.actions;

export default footerSlice;
