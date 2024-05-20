import { Route, Routes, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";

import About from "./routes/About";
import AppDesign from "./routes/AppDesign";
import Contact from "./routes/Contact";
import GraphicDesign from "./routes/GraphicDesign";
import Home from "./routes/Home";
import Locations from "./routes/Locations";
import WebDesign from "./routes/WebDesign";

import classes from "./App.module.css";
import { linkActions } from "./store/link-slice";
import { footerActions } from "./store/footer-slice";
import { widthActions } from "./store/width-slice";

const App = () => {
  const dispatch = useDispatch();
  let location = useLocation();

  const updateWidth = useCallback(() => {
    dispatch(widthActions.resize());
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);

    if (location.pathname.indexOf("/web-design") > -1) {
      dispatch(linkActions.web());
    } else if (location.pathname.indexOf("/app-design") > -1) {
      dispatch(linkActions.app());
    } else if (location.pathname.indexOf("/graphic-design") > -1) {
      dispatch(linkActions.graphic());
    } else {
      dispatch(linkActions.reset());
    }

    if (location.pathname.indexOf("/contact") > -1) {
      dispatch(footerActions.hide());
    } else {
      dispatch(footerActions.show());
    }
    return () => window.removeEventListener("resize", updateWidth);
  }, [location, updateWidth, dispatch]);

  return (
    <div className={classes.app}>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="app-design" element={<AppDesign />} />
          <Route path="contact" element={<Contact />} />
          <Route path="graphic-design" element={<GraphicDesign />} />
          <Route path="locations" element={<Locations />} />
          <Route path="web-design" element={<WebDesign />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
