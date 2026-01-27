import { StrictMode, React } from "react";
import { createRoot, ReactDOM } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "././components/CSRContactsPractice/ContactsApp.css";
import ContactsApp, {
  loader as rootLoader,
} from "./components/CSRContactsPractice/ContactsApp";
import ContactsErrorPage from "./components/CSRContactsPractice/ContactsErrorPage";
import ContactCard from "./components/CSRContactsPractice/ContactsCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ContactsApp />,
    errorElement: <ContactsErrorPage />,
    // loader gets your stuff ready before
    // the page shows up
    loader: rootLoader,
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
