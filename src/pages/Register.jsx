import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { User, Mail, Lock, Eye, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import { Auth } from "../cosntext/AuthContext";

const Register = () => {
  // createUser ma data store kar raha hi
  const { registeredUsers, setRegisteredUsers, setLoggedInUser } =
    useContext(Auth);
  const {
    register,
    handleSubmit,
    // watch,
    reset,
    formState: { errors },
  } = useForm();

  //   const password = watch("password");
  const navigate = useNavigate();

  let formSubmit = (data) => {
    let arr = [...registeredUsers, data];
    setRegisteredUsers(arr);
    alert("user registered successfully");
    setLoggedInUser(data);
    localStorage.setItem("loggedinUser", JSON.stringify(data));
    localStorage.setItem("registeredUsers", JSON.stringify(arr));
    navigate("/main");

    reset();
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] flex justify-center items-center px-4">
      <div className="w-full max-w-lg bg-[#111111] border border-zinc-800 rounded-3xl p-8">
        <h1 className="text-4xl font-bold text-white">Create Account</h1>

        <p className="text-zinc-500 mt-2">Join SkyMart and start shopping</p>

        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5 mt-8">
          {/* Full Name */}
          <div>
            <div className="flex items-center bg-[#1d1d1d] border border-zinc-700 rounded-xl px-4 h-14">
              <User className="text-zinc-500" size={18} />

              <input
                type="text"
                placeholder="Full Name"
                className="flex-1 bg-transparent outline-none px-4 text-white"
                {...register("name", {
                  required: "Full name is required",
                })}
              />
            </div>

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <div className="flex items-center bg-[#1d1d1d] border border-zinc-700 rounded-xl px-4 h-14">
              <Mail className="text-zinc-500" size={18} />

              <input
                type="email"
                placeholder="Email"
                className="flex-1 bg-transparent outline-none px-4 text-white"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email",
                  },
                })}
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
            <div className="flex items-center bg-[#1d1d1d] border border-zinc-700 rounded-xl px-4 h-14">
              <Lock className="text-zinc-500" size={18} />

              <input
                type="password"
                placeholder="Password"
                className="flex-1 bg-transparent outline-none px-4 text-white"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                })}
              />

              <Eye className="text-zinc-500 cursor-pointer" size={18} />
            </div>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          {/* <div>
            <div className="flex items-center bg-[#1d1d1d] border border-zinc-700 rounded-xl px-4 h-14">
              <Lock className="text-zinc-500" size={18} />

              <input
                type="password"
                placeholder="Confirm Password"
                className="flex-1 bg-transparent outline-none px-4 text-white"
                {...register("confirmPassword", {
                  required: "Confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
            </div>

            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div> */}

          {/* Button */}
          <button
            type="submit"
            className="w-full h-14 bg-lime-400 hover:bg-lime-300 rounded-xl text-black font-semibold flex items-center justify-center gap-2"
          >
            Create Account
            <ArrowRight size={20} />
          </button>

          <p className="text-center text-zinc-500">
            Already have an account?
            <span
              onClick={() => navigate("/")}
              className="text-lime-400 cursor-pointer ml-2"
            >
              Sign In
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
