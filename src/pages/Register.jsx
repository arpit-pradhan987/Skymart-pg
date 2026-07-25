import React, { useContext, useState } from "react";
import { ArrowRight, Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import LeftSection from "../component/LeftSection";
import { Auth } from "../cosntext/AuthContext";

const Register = () => {
  const { registeredUsers, setRegisteredUsers, setLoggedInUser } = useContext(Auth);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const password = watch("password");

  const formSubmit = (data) => {
    const email = data.email.toLowerCase().trim();
    if (registeredUsers.some((user) => user.email.toLowerCase() === email)) {
      toast.error("An account already exists for that email address.");
      return;
    }
    const user = { name: data.name.trim(), email, password: data.password };
    const users = [...registeredUsers, user];
    setRegisteredUsers(users);
    setLoggedInUser(user);
    localStorage.setItem("loggedinUser", JSON.stringify(user));
    localStorage.setItem("registeredUsers", JSON.stringify(users));
    toast.success(`Welcome to SkyMart, ${user.name.split(" ")[0]}!`);
    navigate("/main");
  };

  const fieldClass = (hasError) => `flex items-center rounded-xl border bg-white/[0.025] px-3 ${hasError ? "border-rose-300/60" : "border-white/15 focus-within:border-lime-200/70 focus-within:ring-4 focus-within:ring-lime-300/8"}`;

  return (
    <div className="grid min-h-screen bg-[#07110d] text-white lg:grid-cols-2"><LeftSection /><section className="flex items-center justify-center px-5 py-10 sm:px-8"><div className="w-full max-w-md"><Link to="/" className="mb-10 inline-flex items-center gap-2 text-xl font-extrabold tracking-tight text-white lg:hidden"><span className="grid h-9 w-9 place-items-center rounded-xl bg-lime-300 text-[#102618]">S</span>Sky<span className="text-lime-200">Mart</span></Link><p className="eyebrow">Start shopping smarter</p><h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Create your account.</h1><p className="mt-3 text-sm leading-6 text-slate-400">It only takes a minute to save favourites and build your cart.</p>
        <form onSubmit={handleSubmit(formSubmit)} className="mt-8 space-y-4" noValidate>
          <label className="block"><span className="mb-2 block text-sm font-semibold text-slate-300">Full name</span><span className={fieldClass(errors.name)}><User size={18} className="shrink-0 text-slate-500" /><input {...register("name", { required: "Enter your name.", minLength: { value: 2, message: "Use at least 2 characters." } })} autoComplete="name" placeholder="Your name" className="h-12 w-full bg-transparent px-3 text-sm text-white outline-none placeholder:text-slate-600" /></span>{errors.name ? <span className="mt-1.5 block text-xs font-medium text-rose-200">{errors.name.message}</span> : null}</label>
          <label className="block"><span className="mb-2 block text-sm font-semibold text-slate-300">Email address</span><span className={fieldClass(errors.email)}><Mail size={18} className="shrink-0 text-slate-500" /><input {...register("email", { required: "Enter your email address.", pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email address." } })} type="email" autoComplete="email" placeholder="you@example.com" className="h-12 w-full bg-transparent px-3 text-sm text-white outline-none placeholder:text-slate-600" /></span>{errors.email ? <span className="mt-1.5 block text-xs font-medium text-rose-200">{errors.email.message}</span> : null}</label>
          <label className="block"><span className="mb-2 block text-sm font-semibold text-slate-300">Password</span><span className={fieldClass(errors.password)}><Lock size={18} className="shrink-0 text-slate-500" /><input {...register("password", { required: "Choose a password.", minLength: { value: 6, message: "Use at least 6 characters." } })} type={showPassword ? "text" : "password"} autoComplete="new-password" placeholder="At least 6 characters" className="h-12 w-full bg-transparent px-3 text-sm text-white outline-none placeholder:text-slate-600" /><button type="button" onClick={() => setShowPassword((visible) => !visible)} className="p-1 text-slate-500 hover:text-lime-100" aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button></span>{errors.password ? <span className="mt-1.5 block text-xs font-medium text-rose-200">{errors.password.message}</span> : null}</label>
          <label className="block"><span className="mb-2 block text-sm font-semibold text-slate-300">Confirm password</span><span className={fieldClass(errors.confirmPassword)}><Lock size={18} className="shrink-0 text-slate-500" /><input {...register("confirmPassword", { required: "Confirm your password.", validate: (value) => value === password || "Passwords do not match." })} type="password" autoComplete="new-password" placeholder="Repeat your password" className="h-12 w-full bg-transparent px-3 text-sm text-white outline-none placeholder:text-slate-600" /></span>{errors.confirmPassword ? <span className="mt-1.5 block text-xs font-medium text-rose-200">{errors.confirmPassword.message}</span> : null}</label>
          <button type="submit" className="primary-button mt-2 w-full gap-2 py-3.5 text-sm">Create account <ArrowRight size={17} /></button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-400">Already have an account? <Link to="/" className="font-bold text-lime-200 hover:text-lime-100">Sign in</Link></p>
      </div></section></div>
  );
};

export default Register;
