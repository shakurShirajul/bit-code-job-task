import { Lock, LogIn, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { useLoginMutation } from "../../features/api/baseAPI";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/authSlice";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const [setLoginUser] = useLoginMutation();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await setLoginUser(data).unwrap();
      if (response) {
        dispatch(setUser(response.user));
        reset();
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-900 to-indigo-900 p-4">
      <div className="w-full max-w-md rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg p-6 shadow-2xl space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-white">Welcome Back!</h1>
          <p className="text-sm text-white/70">
            Enter your credentials to access your account
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
                type="email"
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/10 border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
            </div>
            {errors.email && (
              <p className="text-xs text-red-400">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
              <input
                {...register("password", { required: "Password is required" })}
                type="password"
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/10 border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
            </div>
            {errors.password && (
              <p className="text-xs text-red-400">{errors.password.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 py-2 px-4 rounded-xl bg-sky-700 hover:bg-sky-600 transition text-white font-semibold shadow-md cursor-pointer"
          >
            <LogIn className="w-4 h-4" />
            Login
          </button>
        </form>

        {/* Link to signup */}
        <p className="text-center text-sm text-white/80">
          Don't have an account?{" "}
          <Link
            to="/auth/signup"
            className="text-sky-300 hover:underline hover:text-sky-200"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
