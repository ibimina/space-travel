import React from "react";
import ReactDOM from "react-dom/client";

//import route for page navigation
import { HashRouter } from "react-router-dom";

//style sheet
import "./index.css";

//components
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
