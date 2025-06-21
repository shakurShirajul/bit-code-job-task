import { useEffect, useState } from "react";
import Navbar from "../components/shared/Navbar";
import { Navigate, Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useGetCurrentUserQuery } from "../features/api/baseAPI";
import { logoutUser, setUser } from "../features/authSlice";
import LoadingScreen from "../components/shared/LoadingScreen";

const Root = () => {
  const dispatch = useDispatch();
  const { data, isSuccess, isLoading, isError } = useGetCurrentUserQuery();
  const user = useSelector((state) => state.auth.user);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isSuccess && data?.user) {
      dispatch(setUser(data.user));
    } else if (isError) {
      dispatch(logoutUser());
    }
  }, [isSuccess, isError, data, dispatch, user]);

  if (isLoading || showLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="">
      <Navbar />
      <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 font-robotoo">
        <div className="max-w-7xl mx-auto pt-25">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Root;
