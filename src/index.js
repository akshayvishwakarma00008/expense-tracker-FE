import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
//redux 
import { Provider } from "react-redux";
import store from "./redux/store/store";
import App from "./App";
import Navbar from "./components/Navigation/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Navbar/>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


