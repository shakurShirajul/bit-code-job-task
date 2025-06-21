import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/login";
import Home from "../pages/home/Home";
import RoadmapDetails from "../pages/roadmap/RoadmapDetails";
import { redirectIfAuthenticated, requireAuth } from "../utils/authloader";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/roadmap/details/:id",
        loader: requireAuth(),
        Component: RoadmapDetails,
      },
    ],
  },
  {
    path: "/auth/signup",
    Component: Signup,
    loader: redirectIfAuthenticated(),
  },
  {
    path: "/auth/login",
    Component: Login,
    loader: redirectIfAuthenticated(),
  },
]);
export default router;
