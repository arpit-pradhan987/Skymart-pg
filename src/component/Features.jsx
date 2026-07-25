import React from "react";
import { BadgeCheck, RotateCcw, Truck } from "lucide-react";

const features = [
  { title: "Fast, trackable delivery", subtitle: "Free shipping on eligible orders over $50.", icon: Truck },
  { title: "Simple returns", subtitle: "Changed your mind? Send it back within 30 days.", icon: RotateCcw },
  { title: "Shop with confidence", subtitle: "Secure payments and carefully sourced products.", icon: BadgeCheck },
];

const Features = () => (
  <section className="pb-4 pt-2 sm:pb-8">
    <div className="site-container grid gap-3 md:grid-cols-3">
      {features.map(({ title, subtitle, icon }) => {
        const Icon = icon;
        return <div key={title} className="surface-muted flex gap-4 rounded-2xl p-5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-lime-300/10 text-lime-200"><Icon size={19} /></span>
          <div>
            <h3 className="font-bold text-white">{title}</h3>
            <p className="mt-1 text-sm leading-5 text-slate-400">{subtitle}</p>
          </div>
        </div>;
      })}
    </div>
  </section>
);

export default Features;
