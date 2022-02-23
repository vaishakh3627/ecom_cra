import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import { OverlayProvider } from "./OverlayContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <OverlayProvider>
        <App />
      </OverlayProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
