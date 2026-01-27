import { StrictMode, React } from "react";
import { createRoot, ReactDOM } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "././components/CSRContactsPractice/ContactsApp.css";
import ContactsApp, {
  loader as rootLoader,
  action as rootAction,
} from "./components/CSRContactsPractice/ContactsApp";
import ContactsErrorPage from "./components/CSRContactsPractice/ContactsErrorPage";
import ContactCard, {
  loader as contactLoader,
} from "./components/CSRContactsPractice/ContactsCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ContactsApp />,
    errorElement: <ContactsErrorPage />,
    // loader gets your stuff ready before
    // the page shows up
    loader: rootLoader,
    // action is for data mutation (PUT/UPDATE/DELETE)
    // like form submissions and side effects
    action: rootAction,
    children: [
      {
        path: "contacts/:contactID",
        element: <ContactCard />,
        loader: contactLoader,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
