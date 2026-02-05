import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import CounterApp from "./CounterApp.jsx";
import Tugas from "../tugas/Tugas.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterApp />
    <Tugas />
  </StrictMode>
);