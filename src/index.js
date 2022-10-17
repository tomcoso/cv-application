import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GhTomcoso from "./components/GhTomcoso";
import "./style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <GhTomcoso />
  </React.StrictMode>
);
