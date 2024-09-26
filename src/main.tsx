import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "@/Router";
import theme from "@/utils/theme";
import "@/t.css";

theme.update();

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
