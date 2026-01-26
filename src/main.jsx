import { StrictMode, React } from "react";
import { createRoot, ReactDOM } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "././components/CSRContactsPractice/ContactsApp.css";
import ContactsApp from "./components/CSRContactsPractice/ContactsApp";
import ContactsErrorPage from "./components/CSRContactsPractice/ContactsErrorPage";
import ContactCard from "./components/CSRContactsPractice/ContactsCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ContactsApp />,
    errorElement: <ContactsErrorPage />,
    children: [
      {
        path: "contacts/:contactID",
        element: <ContactCard />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
