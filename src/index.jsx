import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Correct way to import

 // Ensure the App component exists
import MainRouter from "./mainrouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>
);
