import React from "react";
import { Heart, Zap } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-white/8 bg-[#08130e]">
      <div className="site-container py-10">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <Link to="/main" className="inline-flex items-center gap-2 text-xl font-extrabold tracking-tight text-white">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-lime-300 text-[#102618]">
                <Zap size={16} fill="currentColor" />
              </span>
              Sky<span className="text-lime-300">Mart</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
              A calmer, faster way to discover everyday favourites.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-400">
            <Link to="/main/shop" className="hover:text-lime-200">Shop</Link>
            <Link to="/main/about" className="hover:text-lime-200">Our story</Link>
            <span className="flex items-center gap-1.5">Built with <Heart size={14} className="text-lime-300" fill="currentColor" /> for thoughtful shopping</span>
          </div>
        </div>
        <div className="mt-8 border-t border-white/8 pt-5 text-xs text-slate-500">
          © {new Date().getFullYear()} SkyMart. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
