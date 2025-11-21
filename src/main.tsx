import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.css";
import App from "./App.tsx";
import ThemeProvider from "./providers/ThemeProvider.tsx";
import TranslationsProvider from "./providers/TranslationsProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <TranslationsProvider>
        <App />
      </TranslationsProvider>
    </ThemeProvider>
  </StrictMode>,
);
