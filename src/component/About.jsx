import React from "react";
import { Zap, Package, Users, Star, Truck } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: <Package size={28} />,
    value: "20K+",
    title: "Products",
  },
  {
    id: 2,
    icon: <Users size={28} />,
    value: "50K+",
    title: "Happy Customers",
  },
  {
    id: 3,
    icon: <Star size={28} />,
    value: "4.9",
    title: "Avg. Rating",
  },
  {
    id: 4,
    icon: <Truck size={28} />,
    value: "99%",
    title: "On-time Delivery",
  },
];

const AboutPage = () => {
  return (
    <section className=" bg-[#111111] text-white py-13 px-6 ">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-3xl bg-lime-400 flex items-center justify-center mb-8">
            <Zap className="text-black" size={36} fill="black" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold">
            About <span className="text-lime-400">SkyMart</span>
          </h1>

          <p className="mt-8 max-w-3xl text-gray-500 text-lg md:text-2xl leading-relaxed">
            SkyMart is a next-generation e-commerce platform built to make
            online shopping fast, fair, and enjoyable — for everyone.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-24 ">
          {stats.map((item) => (
            <div
              key={item.id}
              className="border border-zinc-600 rounded-3xl py-12 px-6 flex flex-col items-center hover:border-lime-400 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-lime-400 mb-8">{item.icon}</div>

              <h2 className="text-5xl font-bold">{item.value}</h2>

              <p className="text-gray-500 text-lg mt-3">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
