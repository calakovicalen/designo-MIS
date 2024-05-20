import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import store from "./store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Navigation />
      <App />
      <Footer />
    </Provider>
  </BrowserRouter>
);
