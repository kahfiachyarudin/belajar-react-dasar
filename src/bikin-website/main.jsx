import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Utama from "./Utama.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Utama />
  </StrictMode>
);