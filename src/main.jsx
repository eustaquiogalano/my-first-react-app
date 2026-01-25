import { StrictMode, React } from "react";
import { createRoot, ReactDOM } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import CSRApp from "./components/ClientSideRouting/CSRApp.jsx";
import Profile from "./components/ClientSideRouting/Profile.jsx";
import Friends from "./components/ClientSideRouting/ProfileChildrenComponents/Friends.jsx";
import About from "./components/ClientSideRouting/ProfileChildrenComponents/About.jsx";
import DefaultProfilePage from "./components/ClientSideRouting/ProfileChildrenComponents/DefaultProfilePage.jsx";
import ErrorPage from "./components/ClientSideRouting/ErrorPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <CSRApp />, errorElement: <ErrorPage /> },
  {
    path: "profile",
    element: <Profile />,
    children: [
      { index: true, element: <DefaultProfilePage /> },
      { path: "friends", element: <Friends /> },
      { path: "about", element: <About /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
