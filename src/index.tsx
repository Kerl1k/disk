import ReactDOM from "react-dom/client";
import AppRouter from "./routers/Router";
import "./index.css";
import { Provider } from "react-redux";
import * as Store from "./store/store";
import React from "react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={Store.default}>
    <AppRouter />
  </Provider>
);
