import { createElement, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DataApp from "./DataApp.jsx";
import "./data.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <DataApp />
    </StrictMode>
);