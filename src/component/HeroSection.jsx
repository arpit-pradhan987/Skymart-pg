import React, { useContext } from "react";
import { ArrowRight, BadgeCheck, Sparkles, Truck } from "lucide-react";
import { useNavigate } from "react-router";
import { Auth } from "../cosntext/AuthContext.jsx";

const HeroSection = () => {
  const navigate = useNavigate();
  const { loggedInUser } = useContext(Auth);
  const firstName = loggedInUser?.name?.trim().split(" ")[0] || "there";

  return (
    <section className="page-enter pt-6 sm:pt-8">
      <div className="site-container">
        <div className="relative isolate overflow-hidden rounded-[2rem] border border-lime-200/15 bg-[#102a1b] px-6 py-9 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
          <div className="absolute inset-0 -z-10 opacity-50" style={{ backgroundImage: "linear-gradient(rgba(183,245,109,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(183,245,109,.08) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
          <div className="absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full bg-lime-300/14 blur-3xl" />
          <div className="absolute -bottom-28 left-1/3 -z-10 h-64 w-64 rounded-full bg-emerald-400/12 blur-3xl" />

          <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow"><Sparkles size={14} /> Your curated storefront</p>
              <h1 className="mt-5 text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Good to see you, <span className="text-lime-200">{firstName}.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-emerald-50/70 sm:text-lg">
                Explore practical finds, standout essentials, and small upgrades for every day—without the clutter.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button onClick={() => navigate("/main/shop")} className="primary-button gap-2 px-5 py-3.5 text-sm">
                  Explore products <ArrowRight size={17} />
                </button>
                <button onClick={() => navigate("/main/shop?category=electronics")} className="secondary-button px-5 py-3.5 text-sm">
                  Browse electronics
                </button>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-2xl border border-white/12 bg-white/[0.06] p-5 backdrop-blur-sm">
                <div className="flex items-start justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-lime-300 text-[#12331e]"><Truck size={20} /></span>
                  <span className="rounded-full bg-lime-200/12 px-2.5 py-1 text-xs font-semibold text-lime-100">On us</span>
                </div>
                <p className="mt-6 text-2xl font-extrabold text-white">Free delivery</p>
                <p className="mt-1 text-sm text-emerald-50/65">For orders over $50</p>
              </div>
              <div className="rounded-2xl border border-white/12 bg-[#081a10]/65 p-5 backdrop-blur-sm">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-sky-300/15 text-sky-200"><BadgeCheck size={20} /></span>
                <p className="mt-6 text-2xl font-extrabold text-white">Hand-picked</p>
                <p className="mt-1 text-sm text-emerald-50/65">Rated products, clear choices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
