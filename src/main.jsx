import { StrictMode, React } from "react";
import { createRoot, ReactDOM } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "././components/CSRContactsPractice/ContactsApp.css";
import ContactsApp from "./components/CSRContactsPractice/ContactsApp";
import ContactsErrorPage from "./components/CSRContactsPractice/ContactsErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ContactsApp />,
    errorElement: <ContactsErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
