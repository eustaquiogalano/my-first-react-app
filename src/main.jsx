import { StrictMode, React } from "react";
import { createRoot, ReactDOM } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
