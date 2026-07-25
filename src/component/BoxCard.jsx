import React, { useContext } from "react";
import { ArrowUpRight, Package, ShieldCheck, ShoppingBag } from "lucide-react";
import { Main } from "../cosntext/MainContext.jsx";

const BoxCard = () => {
  const { totalItems, totalPrice } = useContext(Main);
  const stats = [
    { icon: ShoppingBag, value: totalItems, label: "Items in your cart", tone: "text-lime-200 bg-lime-300/10" },
    { icon: ArrowUpRight, value: `$${totalPrice.toFixed(2)}`, label: "Current cart total", tone: "text-sky-200 bg-sky-300/10" },
    { icon: Package, value: "20", label: "Products to discover", tone: "text-violet-200 bg-violet-300/10" },
    { icon: ShieldCheck, value: "30 days", label: "Easy return window", tone: "text-amber-200 bg-amber-300/10" },
  ];

  return (
    <section className="py-2 sm:py-4">
      <div className="site-container grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ icon, value, label, tone }) => {
          const Icon = icon;
          return <div key={label} className="surface group rounded-2xl p-5 hover:-translate-y-0.5 hover:border-lime-200/30">
            <span className={`grid h-10 w-10 place-items-center rounded-xl ${tone}`}><Icon size={19} /></span>
            <p className="mt-5 text-2xl font-extrabold tracking-tight text-white">{value}</p>
            <p className="mt-1 text-sm text-slate-400">{label}</p>
          </div>;
        })}
      </div>
    </section>
  );
};

export default BoxCard;
