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
  action as contactAction,
} from "./components/CSRContactsPractice/ContactsCard";
import ContactsEdit, {
  action as editAction,
} from "./components/CSRContactsPractice/ContactsEdit";
import { action as deleteAction } from "./components/CSRContactsPractice/ContactsDelete";
import ContactsIndex, {
  loader as indexLoader,
} from "./components/CSRContactsPractice/ContactsIndex";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ContactsApp />,
    // errorElement handles the error of the page
    errorElement: <ContactsErrorPage />,
    // loader gets your stuff ready before
    // the page shows up
    loader: rootLoader,
    // action is for data mutation (PUT/UPDATE/DELETE)
    // like form submissions and side effects
    action: rootAction,
    children: [
      {
        index: true,
        element: <ContactsIndex />,
        loader: indexLoader,
      },
      {
        path: "contacts/:contactID",
        element: <ContactCard />,
        loader: contactLoader,
        action: contactAction,
      },
      {
        path: "contacts/:contactID/edit",
        element: <ContactsEdit />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactID/delete",
        action: deleteAction,
        errorElement: <div>Sheeee! There was an error.</div>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
