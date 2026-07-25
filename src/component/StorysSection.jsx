import React from "react";
import { HeartHandshake, ShieldCheck, Sparkles, Timer } from "lucide-react";

const values = [
  { icon: ShieldCheck, title: "Trust over noise", description: "Clear product information and honest choices, so you know what you’re buying." },
  { icon: Timer, title: "Respect for your time", description: "A fast, focused experience from finding an item through checkout." },
  { icon: HeartHandshake, title: "Customer-first details", description: "Friendly support, straightforward returns, and no unnecessary friction." },
  { icon: Sparkles, title: "Better everyday finds", description: "A curated collection with useful products, not endless filler." },
];

const StorysSection = () => (
  <section className="py-12 sm:py-16">
    <div className="site-container grid gap-4 lg:grid-cols-[.9fr_1.1fr]">
      <article className="surface rounded-3xl p-6 sm:p-8"><p className="eyebrow">Our story</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white">Born from a simple question.</h2><div className="mt-6 space-y-4 text-sm leading-7 text-slate-400"><p>What if online shopping felt less like a maze and more like getting a great recommendation from someone you trust?</p><p>SkyMart began as a small project by people who were tired of cluttered catalogues and unclear decisions. We built the kind of experience we wanted to use: quick, calm, and transparent.</p><p>That spirit still shapes every part of SkyMart today—from the products we feature to the way we communicate.</p></div></article>
      <div className="grid gap-3 sm:grid-cols-2">{values.map(({ icon, title, description }) => { const Icon = icon; return <article key={title} className="surface rounded-2xl p-5"><span className="grid h-10 w-10 place-items-center rounded-xl bg-lime-300/10 text-lime-200"><Icon size={19} /></span><h3 className="mt-6 font-extrabold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{description}</p></article>; })}</div>
    </div>
  </section>
);

export default StorysSection;
