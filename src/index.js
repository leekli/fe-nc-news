import React from "react";
import ReactDOM from "react-dom";
import "./css/index.module.css";
import App from "./App";
import { UserProvider } from "./contexts/User";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
