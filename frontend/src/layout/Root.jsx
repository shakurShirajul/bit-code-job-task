import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="font-robotoo">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default Root;
