import { configureStore } from "@reduxjs/toolkit";

import navigationSlice from "./navigation-slice";
import linkSlice from "./link-slice";
import footerSlice from "./footer-slice";
import locationSlice from "./location-slice";
import widthSlice from "./width-slice";

const store = configureStore({
  reducer: {
    navigation: navigationSlice.reducer,
    link: linkSlice.reducer,
    footer: footerSlice.reducer,
    location: locationSlice.reducer,
    width: widthSlice.reducer,
  },
});

export default store;
