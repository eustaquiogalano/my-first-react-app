import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { default as Pagbati, NamedSample, EmailInput } from "./Greeting.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Pagbati />
    <NamedSample />
    <EmailInput />
  </StrictMode>
);
