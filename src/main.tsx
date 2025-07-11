import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Effect from "./Effect.tsx";
import App from "Memo";
import Average from "./Average";

createRoot(document.getElementById("root")!).render(
    // <StrictMode>
    <App />
    // </StrictMode>
);
