import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  default as Pagbati,
  NamedSample,
  EmailInput,
  App2,
  App3,
} from "./components/Greeting.jsx";
import App from "./App.jsx";
import { BookList } from "./components/gospelList.jsx";
import {
  ListOfProfessionals,
  ScientistList,
} from "./components/RenderList.jsx";
import { Button } from "./components/Buttons.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Button />
    <Button text="Dont Click Me" color="red" />
    <Button text="Look at Me" fontSize={30} />
    <App2 name="Jesus Christ" father="God" />
    <App3 />
    <BookList />
    <ListOfProfessionals />
    <ScientistList />
  </StrictMode>
);
