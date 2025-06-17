import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/login";
import Home from "../pages/home/Home";
import RoadmapDetails from "../pages/roadmap/RoadmapDetails";

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
        Component: RoadmapDetails,
      },
    ],
  },
  {
    path: "/auth/signup",
    Component: Signup,
  },
  {
    path: "/auth/login",
    Component: Login,
  },
]);
export default router;
