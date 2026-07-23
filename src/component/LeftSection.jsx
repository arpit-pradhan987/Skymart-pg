import React from "react";
import { Bolt } from "lucide-react";
import StatsCard from "./StatsCard";

const LeftSection = () => {
  return (
    <div className="flex flex-col  justify-center gap-6   lg:p-14 border-r border-zinc-800">
      {/* Logo */}

      <div className="flex items-center gap-3">
        <div className="bg-lime-400 w-12 h-12 rounded-full flex items-center justify-center">
          <Bolt className="text-black" />
        </div>

        <h1 className="text-6xl font-bold">
          Sky<span className="text-lime-400">Mart</span>
        </h1>
      </div>

      {/* Hero */}

      <div className="">
        <p className="uppercase tracking-widest text-lime-400 font-semibold">
          Welcome Back
        </p>

        <h2 className="text-6xl font-bold mt-6 leading-tight">
          Shop the future.
          <br />
          <span className="text-lime-400">Today.</span>
        </h2>

        <p className="text-zinc-400 mt-8 max-w-xl text-lg leading-8">
          Thousands of products, lightning-fast delivery, and prices that make
          your wallet happy.
        </p>
      </div>

      {/* Stats */}

      <div className="grid grid-cols-3 gap-5">
        <StatsCard number="20K+" title="Products" />
        <StatsCard number="50K+" title="Users" />
        <StatsCard number="4.9★" title="Rating" />
      </div>
    </div>
  );
};

export default LeftSection;
