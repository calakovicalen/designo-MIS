import { createSlice } from "@reduxjs/toolkit";

const initialState = { canada: false, australia: false, uk: false };

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    canada(state) {
      state.canada = true;
      state.australia = false;
      state.uk = false;
    },
    austalia(state) {
      state.canada = false;
      state.australia = true;
      state.uk = false;
    },
    uk(state) {
      state.canada = false;
      state.australia = false;
      state.uk = true;
    },
    reset() {
      return initialState;
    },
  },
});

export const locationActions = locationSlice.actions;

export default locationSlice;
