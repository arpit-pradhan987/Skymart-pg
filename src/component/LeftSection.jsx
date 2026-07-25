import React from "react";
import { BadgeCheck, ShoppingBag, Sparkles, Zap } from "lucide-react";

const LeftSection = () => (
  <aside className="relative hidden min-h-screen overflow-hidden border-r border-white/8 bg-[#102a1b] p-10 lg:flex lg:flex-col xl:p-14">
    <div className="absolute inset-0 opacity-35" style={{ backgroundImage: "linear-gradient(rgba(183,245,109,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(183,245,109,.08) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
    <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-lime-300/15 blur-3xl" />
    <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-sky-400/13 blur-3xl" />
    <div className="relative flex items-center gap-2.5"><span className="grid h-10 w-10 place-items-center rounded-xl bg-lime-300 text-[#102618]"><Zap size={20} fill="currentColor" /></span><h1 className="text-2xl font-extrabold tracking-tight text-white">Sky<span className="text-lime-200">Mart</span></h1></div>
    <div className="relative my-auto max-w-xl"><p className="eyebrow"><Sparkles size={14} /> Shop with clarity</p><h2 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-[-0.05em] text-white xl:text-6xl">Useful finds.<br /><span className="text-lime-200">Better days.</span></h2><p className="mt-6 max-w-md text-base leading-7 text-emerald-50/70">A thoughtfully curated store for the things you need, the things you love, and everything in between.</p><div className="mt-10 grid grid-cols-2 gap-3"><div className="rounded-2xl border border-white/12 bg-white/[0.06] p-4 backdrop-blur-sm"><ShoppingBag size={19} className="text-lime-200" /><p className="mt-5 text-xl font-extrabold text-white">20K+</p><p className="mt-1 text-xs text-emerald-50/65">Products explored</p></div><div className="rounded-2xl border border-white/12 bg-white/[0.06] p-4 backdrop-blur-sm"><BadgeCheck size={19} className="text-lime-200" /><p className="mt-5 text-xl font-extrabold text-white">4.9/5</p><p className="mt-1 text-xs text-emerald-50/65">Shopper rating</p></div></div></div>
    <p className="relative text-xs text-emerald-50/45">Simple shopping, built for real life.</p>
  </aside>
);

export default LeftSection;
