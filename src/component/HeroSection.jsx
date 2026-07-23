import React from "react";
import { ArrowRight, Package, TrendingUp, Star, Tag } from "lucide-react";
import { useNavigate } from "react-router";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className=" bg-[#0B0B0B] flex items-center justify-center p-8">
      <div className="relative w-full max-w-7xl overflow-hidden rounded-[32px] border border-zinc-700 bg-[#111111]">
        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative flex flex-col justify-between gap-10 px-16 py-16 lg:flex-row">
          {/* Left Content */}
          <div className="max-w-2xl">
            <p className="mb-6 text-lg font-medium uppercase tracking-[4px] text-lime-400">
              GOOD MORNING 👋
            </p>

            <h1 className="text-6xl font-bold leading-tight text-white">
              Welcome back,
              <br />
              <span className="text-lime-400">ramesh!</span>
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-9 text-zinc-400">
              Discover today's picks — hand-curated products across electronics,
              fashion, and more.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
              <button
                onClick={() => navigate("/main/shop")}
                className="flex items-center gap-3 rounded-2xl bg-lime-400 px-8 py-4 text-lg font-semibold text-black transition hover:bg-lime-300"
              >
                Shop Now
                <ArrowRight size={22} />
              </button>

              <button
                onClick={() => navigate("/main/shop")}
                className="rounded-2xl border border-zinc-700 px-8 py-4 text-lg font-medium text-zinc-300 transition hover:border-zinc-500 hover:bg-zinc-900"
              >
                View All Products
              </button>
            </div>
          </div>

          {/* Right Cards */}
          <div className="flex flex-col justify-center gap-6">
            <div className="flex h-40 w-52 flex-col items-center justify-center rounded-3xl border border-lime-700 bg-lime-900/30 backdrop-blur-sm">
              <h2 className="text-5xl font-bold text-lime-400">20+</h2>
              <p className="mt-2 text-center text-zinc-400">
                Products Available
              </p>
            </div>

            <div className="flex h-32 w-52 flex-col items-center justify-center rounded-3xl border border-zinc-500 bg-[#111111]">
              <h2 className="text-5xl font-bold text-white">Free</h2>
              <p className="mt-2 text-center text-zinc-500">
                Delivery on ₹999+
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
