import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#111111] border-t border-zinc-700 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Logo */}
        <h2 className="text-2xl ">
          <span className="text-lime-400">SkyMart</span>
        </h2>

        {/* Copyright */}
        <p className="mt-2 text-gray-500 text-lg">
          © 2025 SkyMart • Built with React + Redux + TanStack Query
        </p>
      </div>
    </footer>
  );
};

export default Footer;
