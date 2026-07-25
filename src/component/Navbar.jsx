import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { LogOut, Menu, ShoppingBag, X, Zap } from "lucide-react";
import CartDrawer from "./CartDrawer";
import { Main } from "../cosntext/MainContext.jsx";
import { Auth } from "../cosntext/AuthContext.jsx";

const navItems = [
  { label: "Home", to: "/main", end: true },
  { label: "Shop", to: "/main/shop" },
  { label: "About", to: "/main/about" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const { showCart, setShowCart, totalItems } = useContext(Main);
  const { loggedInUser, setLoggedInUser } = useContext(Auth);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem("loggedinUser");
    navigate("/");
  };

  const linkClass = ({ isActive }) =>
    `rounded-lg px-3 py-2 text-sm font-semibold ${
      isActive
        ? "bg-lime-300/10 text-lime-200"
        : "text-slate-300 hover:bg-white/5 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-[#07110d]/86 backdrop-blur-xl">
      <div className="site-container flex h-[4.75rem] items-center justify-between gap-3">
        <NavLink
          to="/main"
          className="flex items-center gap-2.5 rounded-xl focus-visible:outline-offset-4"
          aria-label="SkyMart home"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-lime-300 text-[#102618] shadow-[0_8px_20px_rgba(183,245,109,0.22)]">
            <Zap size={20} fill="currentColor" />
          </span>
          <span className="text-xl font-extrabold tracking-tight text-white">
            Sky<span className="text-lime-300">Mart</span>
          </span>
        </NavLink>

        <nav className="hidden items-center rounded-xl border border-white/8 bg-white/[0.025] p-1 sm:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowCart(true)}
            className="icon-button relative"
            aria-label={`Open cart, ${totalItems} item${totalItems === 1 ? "" : "s"}`}
          >
            <ShoppingBag size={19} />
            {totalItems > 0 ? (
              <span className="absolute -right-1.5 -top-1.5 grid min-w-5 place-items-center rounded-full bg-lime-300 px-1.5 py-0.5 text-[10px] font-extrabold leading-none text-[#102618]">
                {totalItems > 99 ? "99+" : totalItems}
              </span>
            ) : null}
          </button>

          <div className="hidden items-center gap-2.5 rounded-xl border border-white/8 bg-white/[0.025] py-1.5 pl-2 pr-3 md:flex">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-lime-200 to-emerald-400 text-xs font-extrabold text-[#102618]">
              {loggedInUser?.name?.[0]?.toUpperCase() || "U"}
            </span>
            <span className="max-w-24 truncate text-sm font-medium text-slate-200">
              {loggedInUser?.name || "Guest"}
            </span>
          </div>

          <button onClick={handleLogout} className="icon-button hidden sm:inline-flex" aria-label="Sign out">
            <LogOut size={18} />
          </button>

          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="icon-button sm:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* {menuOpen ? (
        <div className="border-t border-white/8 bg-[#0b1811] px-4 py-3 sm:hidden">
          <nav className="site-container grid gap-1" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setMenuOpen(false)}
                className={linkClass}
              >
                {item.label}
              </NavLink>
            ))}
            <button
              onClick={handleLogout}
              className="mt-1 flex items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-semibold text-slate-300 hover:bg-white/5"
            >
              <LogOut size={16} /> Sign out
            </button>
          </nav>
        </div>
      ) : null} */}

      {showCart ? <CartDrawer /> : null}
    </header>
  );
};

export default Navbar;
