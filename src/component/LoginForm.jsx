import React, { useContext, useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Auth } from "../cosntext/AuthContext";
import { toast } from "react-toastify";

const LoginForm = () => {
  const { registeredUsers, setLoggedInUser } = useContext(Auth);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  let formSubmit = (data) => {
    let user = registeredUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });

    if (!user) {
      toast.error("invalid creds or user not found");
      reset();
      return;
    }

    setLoggedInUser(user);
    localStorage.setItem("loggedinUser", JSON.stringify(user));
    toast.success("User loggedin");
    reset();
    navigate("/main");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0b0b] px-4">
      <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-[#111111] p-8 shadow-2xl">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white">Welcome Back 👋</h2>

        <p className="mt-2 text-zinc-500">
          Sign in to continue shopping with SkyMart.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(formSubmit)} className="mt-8 space-y-6">
          {/* Email */}
          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Email Address
            </label>

            <div className="flex items-center rounded-xl border border-zinc-700 bg-[#1d1d1d] px-4">
              <Mail className="text-zinc-500" size={18} />

              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email",
                  },
                })}
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent p-4 text-white placeholder:text-zinc-500 outline-none"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm text-zinc-400">Password</label>

            <div className="flex items-center rounded-xl border border-zinc-700 bg-[#1d1d1d] px-4">
              <Lock className="text-zinc-500" size={18} />

              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                })}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full bg-transparent p-4 text-white placeholder:text-zinc-500 outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff
                    className="text-zinc-500 hover:text-white"
                    size={18}
                  />
                ) : (
                  <Eye className="text-zinc-500 hover:text-white" size={18} />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember & Forgot */}
          {/* <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-zinc-400">
              <input type="checkbox" className="accent-lime-400" />
              Remember me
            </label>

            <button type="button" className="text-lime-400 hover:underline">
              Forgot Password?
            </button>
          </div> */}

          {/* Button */}
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-lime-400 py-4 text-lg font-semibold text-black transition hover:bg-lime-300"
          >
            Sign In
            <ArrowRight size={20} />
          </button>

          {/* Register */}
          <p className="text-center text-zinc-400">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="cursor-pointer font-semibold text-lime-400 hover:underline"
            >
              Create one
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
