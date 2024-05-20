import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  web: true,
  app: true,
  graphic: true,
  url: window.location.href,
};

const linkSlice = createSlice({
  name: "link",
  initialState,
  reducers: {
    web(state) {
      state.web = false;
      state.app = true;
      state.graphic = true;
      state.url = window.location.href;
    },
    app(state) {
      state.web = true;
      state.app = false;
      state.graphic = true;
      state.url = window.location.href;
    },
    graphic(state) {
      state.web = true;
      state.app = true;
      state.graphic = false;
      state.url = window.location.href;
    },
    reset() {
      return initialState;
    },
  },
});

export const linkActions = linkSlice.actions;

export default linkSlice;
