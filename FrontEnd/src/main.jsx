import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppContextProviders from "./contexts/AppContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppContextProviders>
      <App />
    </AppContextProviders>
  </StrictMode>,
);
