import { Mail, User, Lock, UserPlus } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-background font-open-sans">
      <div className="w-full max-w-md border border-gray-200 rounded-2xl p-5 shadow-xl space-y-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-center">Join Our Community</h1>
          <p className="text-center text-gray-600">
            Create your account and start shaping the future
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold">Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  placeholder="e.g. John Doe"
                  type="text"
                  className="w-full pl-10 rounded-md py-1.5 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                  {...register("name", {
                    required: "Name is required",
                  })}
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            {/* Email */}
            <div className="space-y-2">
              <label className="text-xs font-bold">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  placeholder="me@example.com"
                  className="w-full pl-10 rounded-md py-1.5 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email format",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-xs font-bold">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="password"
                  placeholder="****************"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="w-full pl-10 rounded-md py-1.5 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            {/* Button */}
            <div className="space-y-2">
              <button className="w-full rounded bg-sky-800 text-white p-2 text-center font-bold hover:bg-sky-700">
                <span className="flex gap-2 justify-center">
                  <UserPlus /> Create Account
                </span>
              </button>
              <div className="text-center text-sm space-x-1">
                <span className="text-muted-foreground">
                  Already have an account?
                </span>
                <Link to="/auth/login">
                  <span className="text-blue-950 hover:text-blue-700">
                    Login
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
