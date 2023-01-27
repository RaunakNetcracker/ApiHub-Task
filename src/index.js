import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
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
