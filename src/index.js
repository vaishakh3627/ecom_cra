import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./AuthContext";
import { OverlayProvider } from "./OverlayContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <OverlayProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </OverlayProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
