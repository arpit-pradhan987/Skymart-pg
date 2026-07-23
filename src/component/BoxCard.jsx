import React, { useContext } from "react";
import { Package, TrendingUp, Star, Tag } from "lucide-react";
import { Main } from "../cosntext/MainContext.jsx";

const BoxCard = () => {
  const { totalItems, totalPrice } = useContext(Main);

  const stats = [
    {
      id: 1,
      icon: <Package size={24} />,
      value: `${totalItems}`,
      title: "Cart Items",
      subtitle: "In your bag",
      bg: "bg-lime-900/30",
      iconColor: "text-lime-400",
    },
    {
      id: 2,
      icon: <TrendingUp size={24} />,
      value: `$${totalPrice.toFixed(2)}`,
      title: "Cart Value",
      subtitle: "Ready to checkout",
      bg: "bg-blue-900/30",
      iconColor: "text-blue-400",
    },
    {
      id: 3,
      icon: <Star size={24} />,
      value: "5",
      title: "Top Products",
      subtitle: "Highly rated",
      bg: "bg-yellow-900/30",
      iconColor: "text-yellow-400",
    },
    {
      id: 4,
      icon: <Tag size={24} />,
      value: "6",
      title: "Categories",
      subtitle: "To explore",
      bg: "bg-purple-900/30",
      iconColor: "text-purple-400",
    },
  ];
  return (
    <section className="bg-[#0B0B0B]  ">
      <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 rounded-3xl border border-zinc-600 bg-[#111111] p-8 transition-all duration-300 hover:border-lime-400 hover:-translate-y-1"
          >
            {/* Icon */}
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.bg}`}
            >
              <span className={item.iconColor}>{item.icon}</span>
            </div>

            {/* Text */}
            <div>
              <h2 className="text-5xl font-bold text-white">{item.value}</h2>

              <h3 className="mt-1 text-2xl font-medium text-zinc-300">
                {item.title}
              </h3>

              <p className="mt-1 text-lg text-zinc-500">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BoxCard;
