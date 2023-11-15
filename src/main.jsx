import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { FavoritesProvider } from "./context/favoritesContext";
import { CrudProvider } from "./context/crudContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CrudProvider>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </CrudProvider>
    </BrowserRouter>
  </React.StrictMode>
);
