import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "leaflet/dist/leaflet.css";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import ErrorMessage from "./components/ErrorMessage.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<ErrorMessage />}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
