import { useEffect } from "react";
import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router";
import { useDispatch } from "react-redux";
import { useGetCurrentUserQuery } from "../features/api/baseAPI";
import { logoutUser, setUser } from "../features/authSlice";

const Root = () => {
  const dispatch = useDispatch();
  const { data, isSuccess, isError } = useGetCurrentUserQuery();

  useEffect(() => {
    if (isSuccess && data?.user) {
      dispatch(setUser(data.user));
    } else if (isError) {
      dispatch(logoutUser());
    }
  }, [isSuccess, isError, data, dispatch]);

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
