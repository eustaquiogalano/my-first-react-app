import ErrorPage from "./ErrorPage";
import CSRApp from "./CSRApp";
import Profile from "./Profile";

const routes = [
  { path: "/", element: <CSRApp />, errorElement: <ErrorPage /> },
  {
    path: "profile/:name",
    element: <Profile />,
  },
];

export default routes;
