import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 font-robotoo">
        <div className="max-w-7xl mx-auto pt-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Root;
