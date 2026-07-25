import React, { useContext, useState } from "react";
import { ArrowRight, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { Auth } from "../cosntext/AuthContext";

const LoginForm = () => {
  const { registeredUsers, setLoggedInUser } = useContext(Auth);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const formSubmit = (data) => {
    const user = registeredUsers.find((value) => value.email.toLowerCase() === data.email.toLowerCase() && value.password === data.password);
    if (!user) {
      toast.error("We couldn’t find an account with those details.");
      return;
    }
    setLoggedInUser(user);
    localStorage.setItem("loggedinUser", JSON.stringify(user));
    toast.success(`Welcome back, ${user.name.split(" ")[0]}!`);
    navigate("/main");
  };

  return (
    <section className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-8">
      <div className="w-full max-w-md">
        <Link to="/" className="mb-10 inline-flex items-center gap-2 text-xl font-extrabold tracking-tight text-white lg:hidden"><span className="grid h-9 w-9 place-items-center rounded-xl bg-lime-300 text-[#102618]">S</span>Sky<span className="text-lime-200">Mart</span></Link>
        <p className="eyebrow">Welcome back</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Sign in to SkyMart.</h2><p className="mt-3 text-sm leading-6 text-slate-400">Pick up right where you left off—your saved cart is ready when you are.</p>
        <form onSubmit={handleSubmit(formSubmit)} className="mt-8 space-y-5" noValidate>
          <label className="block"><span className="mb-2 block text-sm font-semibold text-slate-300">Email address</span><span className={`flex items-center rounded-xl border bg-white/[0.025] px-3 ${errors.email ? "border-rose-300/60" : "border-white/15 focus-within:border-lime-200/70 focus-within:ring-4 focus-within:ring-lime-300/8"}`}><Mail size={18} className="shrink-0 text-slate-500" /><input {...register("email", { required: "Enter your email address.", pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email address." } })} type="email" autoComplete="email" placeholder="you@example.com" className="h-12 w-full bg-transparent px-3 text-sm text-white outline-none placeholder:text-slate-600" /></span>{errors.email ? <span className="mt-1.5 block text-xs font-medium text-rose-200">{errors.email.message}</span> : null}</label>
          <label className="block"><span className="mb-2 block text-sm font-semibold text-slate-300">Password</span><span className={`flex items-center rounded-xl border bg-white/[0.025] px-3 ${errors.password ? "border-rose-300/60" : "border-white/15 focus-within:border-lime-200/70 focus-within:ring-4 focus-within:ring-lime-300/8"}`}><Lock size={18} className="shrink-0 text-slate-500" /><input {...register("password", { required: "Enter your password.", minLength: { value: 6, message: "Your password needs at least 6 characters." } })} type={showPassword ? "text" : "password"} autoComplete="current-password" placeholder="Enter your password" className="h-12 w-full bg-transparent px-3 text-sm text-white outline-none placeholder:text-slate-600" /><button type="button" onClick={() => setShowPassword((visible) => !visible)} className="p-1 text-slate-500 hover:text-lime-100" aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button></span>{errors.password ? <span className="mt-1.5 block text-xs font-medium text-rose-200">{errors.password.message}</span> : null}</label>
          <button type="submit" className="primary-button mt-2 w-full gap-2 py-3.5 text-sm">Sign in <ArrowRight size={17} /></button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-400">New to SkyMart? <Link to="/register" className="font-bold text-lime-200 hover:text-lime-100">Create an account</Link></p>
      </div>
    </section>
  );
};

export default LoginForm;
