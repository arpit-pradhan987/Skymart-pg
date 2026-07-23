import React from "react";
import { Zap, Shield, Tag } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Fast Delivery",
    subtitle: "Same-day on select items",
    icon: <Zap size={28} />,
    iconColor: "text-lime-400",
  },
  {
    id: 2,
    title: "Secure Payments",
    subtitle: "100% encrypted checkout",
    icon: <Shield size={28} />,
    iconColor: "text-blue-400",
  },
  {
    id: 3,
    title: "Best Prices",
    subtitle: "Price-match guarantee",
    icon: <Tag size={28} />,
    iconColor: "text-emerald-400",
  },
];

const Features = () => {
  return (
    <section className="bg-[#0B0B0B] pb-[40px] ">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="group flex items-center gap-6 rounded-3xl border border-zinc-600 bg-[#111111] px-8 py-8 transition-all duration-300 hover:border-lime-400 hover:-translate-y-1"
          >
            {/* Icon */}
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl ${feature.iconColor}`}
            >
              {feature.icon}
            </div>

            {/* Text */}
            <div>
              <h3 className="text-2xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-1 text-lg text-zinc-500">{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
