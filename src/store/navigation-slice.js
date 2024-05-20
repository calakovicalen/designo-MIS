import { createSlice } from "@reduxjs/toolkit";

const initialState = { open: false };

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    menu(state) {
      state.open = !state.open;
    },
    logo() {
      return initialState;
    },
  },
});

export const navigationActions = navigationSlice.actions;

export default navigationSlice;
