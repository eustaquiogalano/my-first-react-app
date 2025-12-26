import { StrictMode, React } from "react";
import { createRoot, ReactDOM } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Gallery from "./components/gallery-exercise/GalleryApp.jsx";
import Form from "./components/gallery-exercise/FormExercise.jsx";
import { PlaceTree } from "./components/gallery-exercise/PlaceTree.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
