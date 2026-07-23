import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { ShoppingCart, LogOut, Zap } from "lucide-react";
import CartDrawer from "./CartDrawer";
import { Main } from "../cosntext/MainContext.jsx";
import { Auth } from "../cosntext/AuthContext.jsx";

const Navbar = () => {
  const navigate = useNavigate();
  const { showCart, setShowCart, cartItems } = useContext(Main);
  const { loggedInUser, setLoggedInUser } = useContext(Auth);

  const handleLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem("loggedinUser");
    navigate("/");
  };

  return (
    <nav className="bg-[#111111] text-white px-10 py-4 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-lime-400 flex items-center justify-center">
            <Zap className="text-black" size={22} fill="black" />
          </div>

          <h1 className="text-3xl font-bold">
            <span className="text-white">Sky</span>
            <span className="text-lime-400">Mart</span>
          </h1>
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-12 text-lg">
          <NavLink
            to="/main"
            className={({ isActive }) =>
              isActive
                ? "text-lime-400 font-semibold"
                : "text-gray-400 hover:text-white transition"
            }
            to={"/main"}
            end
          >
            Home
          </NavLink>

          <NavLink
            to="/main/shop"
            className={({ isActive }) =>
              isActive
                ? "text-lime-400 font-semibold"
                : "text-gray-400 hover:text-white transition"
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/main/about"
            className={({ isActive }) =>
              isActive
                ? "text-lime-400 font-semibold"
                : "text-gray-400 hover:text-white transition"
            }
          >
            About
          </NavLink>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* User */}
          <div className="flex items-center gap-3 border border-zinc-700 rounded-xl px-4 py-2">
            <div className="w-10 h-10 rounded-lg bg-lime-400 text-black font-bold flex items-center justify-center">
              {loggedInUser?.name?.[0]?.toUpperCase() || "U"}
            </div>

            <span className="text-gray-300">
              {loggedInUser?.name || "User"}
            </span>
          </div>

          {/* Cart */}
          <button
            onClick={() => setShowCart(true)}
            className="relative w-12 h-12 border border-zinc-700 rounded-xl flex items-center justify-center hover:bg-zinc-800 transition"
          >
            <ShoppingCart size={22} />
            {cartItems.length > 0 ? (
              <span className="absolute -top-2 -right-2 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-lime-500 px-1.5 text-xs font-semibold text-black">
                {cartItems.length}
              </span>
            ) : null}
          </button>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="w-12 h-12 border border-zinc-700 rounded-xl flex items-center justify-center hover:bg-zinc-800 transition"
          >
            <LogOut size={20} />
          </button>
        </div>
      </div>
      {showCart ? <CartDrawer /> : null}
    </nav>
  );
};

export default Navbar;
