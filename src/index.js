import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";
import App from "./App";
// import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    // <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    // </BrowserRouter>
);
