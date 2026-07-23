import React from "react";
import { ShieldCheck, Truck, HeartHandshake, Star } from "lucide-react";

const values = [
  {
    icon: <ShieldCheck size={24} />,
    title: "Trust",
    description:
      "Every product is verified for quality and authenticity before listing.",
  },
  {
    icon: <Truck size={24} />,
    title: "Speed",
    description:
      "We obsess over delivery times so your orders arrive when promised.",
  },
  {
    icon: <HeartHandshake size={24} />,
    title: "Community",
    description:
      "Built around real customer feedback, not just business metrics.",
  },
  {
    icon: <Star size={24} />,
    title: "Quality",
    description:
      "We curate the best — no filler, no junk, just great products.",
  },
];

const StorysSection = () => {
  return (
    <section className="bg-[#111111] text-white ">
      <div className="max-w-7xl mx-auto">
        {/* Story Card */}
        <div className="border border-zinc-600 rounded-[32px] p-12">
          <h2 className="text-5xl font-bold mb-8">Our Story</h2>

          <div className="space-y-8 text-zinc-400 text-xl leading-10">
            <p>
              SkyMart started in 2022 as a small side project — two engineers
              tired of bloated, slow e-commerce experiences. We asked ourselves:
              what if shopping online was actually{" "}
              <span className="italic text-white">enjoyable?</span>
            </p>

            <p>
              Three years later, SkyMart serves over 50,000 customers across the
              country. We stock electronics, fashion, jewelry, and everyday
              essentials — all at prices that don't require a second mortgage.
            </p>

            <p>
              We're still the same team at heart: obsessed with speed,
              transparency, and making you feel good about every purchase you
              make here.
            </p>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-5xl font-bold mt-24 mb-14">
          What We Stand For
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((item, index) => (
            <div
              key={index}
              className="border border-zinc-600 rounded-3xl p-8 flex gap-6 items-start hover:border-lime-400 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-lime-400/10 text-lime-400 flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-3xl font-semibold mb-3">{item.title}</h3>

                <p className="text-zinc-400 text-lg leading-8">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorysSection;
