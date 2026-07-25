import React from "react";
import { Package, Sparkles, Star, Truck, Users } from "lucide-react";

const stats = [
  { icon: Package, value: "20K+", label: "Products discovered" },
  { icon: Users, value: "50K+", label: "Happy customers" },
  { icon: Star, value: "4.9/5", label: "Average rating" },
  { icon: Truck, value: "99%", label: "On-time delivery" },
];

const About = () => (
  <section className="page-enter pt-8 sm:pt-12">
    <div className="site-container">
      <div className="relative overflow-hidden rounded-[2rem] border border-lime-200/14 bg-[#102a1b] px-6 py-12 text-center sm:px-10 sm:py-16">
        <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-lime-300/12 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl"><span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-lime-300 text-[#12331e]"><Sparkles size={22} /></span><p className="eyebrow mt-6">Shopping, made considered</p><h1 className="mt-3 text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-6xl">A better everyday <span className="text-lime-200">storefront.</span></h1><p className="mt-5 text-base leading-7 text-emerald-50/70 sm:text-lg">SkyMart helps people find useful, well-loved products without the endless scrolling. Clear choices, dependable delivery, and a little more delight in the details.</p></div>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{stats.map(({ icon, value, label }) => { const Icon = icon; return <div key={label} className="surface rounded-2xl p-5"><Icon size={19} className="text-lime-200" /><p className="mt-5 text-2xl font-extrabold text-white">{value}</p><p className="mt-1 text-sm text-slate-400">{label}</p></div>; })}</div>
    </div>
  </section>
);

export default About;
