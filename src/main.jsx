import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  default as Pagbati,
  NamedSample,
  EmailInput,
  App2,
  App3,
} from "./Greeting.jsx";
import App from "./App.jsx";
import { BookList } from "./gospelList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App2 name="Jesus Christ" father="God" />
    <App3 />
    <BookList />
  </StrictMode>
);
