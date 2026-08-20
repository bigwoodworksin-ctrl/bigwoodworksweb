import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GoogleAnalytics } from "./components/GoogleAnalytics";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <GoogleAnalytics />
    </BrowserRouter>
  </React.StrictMode>,
);
