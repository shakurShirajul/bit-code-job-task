import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/login";
import Home from "../pages/home/Home";
import RoadmapDetails from "../pages/roadmap/RoadmapDetails";
import { redirectIfAuthenticated, requireAuth } from "../utils/authloader";
import Error from "../pages/error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/roadmap/details/:id",
        loader: requireAuth(),
        element: <RoadmapDetails />,
      },
    ],
  },
  {
    path: "/auth/signup",
    element: <Signup />,
    loader: redirectIfAuthenticated(),
  },
  {
    path: "/auth/login",
    element: <Login />,
    loader: redirectIfAuthenticated(),
  },
]);
export default router;
