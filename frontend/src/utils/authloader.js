import { redirect } from "react-router";

export const requireAuth = () => {
  return async () => {
    const response = await fetch("http://localhost:5000/auth/profile", {
      credentials: "include",
    });

    if (!response.ok) {
      return redirect("/auth/login");
    }

    return null;
  };
};

export const redirectIfAuthenticated = (loaderOrAction) => {
  return async (args) => {
    const response = await fetch("http://localhost:5000/auth/profile", {
      credentials: "include",
    });

    if (response.ok) {
      return redirect("/");
    }

    return loaderOrAction ? loaderOrAction(args) : null;
  };
};
