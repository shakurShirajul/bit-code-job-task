import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/login";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [],
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
