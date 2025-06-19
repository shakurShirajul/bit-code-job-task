import { useEffect } from "react";
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

  useEffect(() => {
    if (isSuccess && data?.user) {
      dispatch(setUser(data.user));
    } else if (isError) {
      dispatch(logoutUser());
    }
  }, [isSuccess, isError, data, dispatch, user]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div>
      {/* {data ? ( */}
      <div>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 font-robotoo">
          <div className="max-w-7xl mx-auto pt-25">
            <Outlet />
          </div>
        </div>
      </div>
      {/* ) : (
      <Navigate to="/auth/login" replace state={{ from: location }} />
      )} */}
    </div>
  );
};
export default Root;
