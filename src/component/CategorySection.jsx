import React from "react";
import { ArrowRight, Gem, Laptop, Shirt, Watch } from "lucide-react";
import { useNavigate } from "react-router";

const categories = [
  { title: "Electronics", value: "electronics", detail: "Smart tech for daily life", icon: Laptop, color: "text-sky-200 bg-sky-300/10" },
  { title: "Men's clothing", value: "men's clothing", detail: "Easy staples and layers", icon: Shirt, color: "text-amber-200 bg-amber-300/10" },
  { title: "Women's clothing", value: "women's clothing", detail: "Effortless everyday style", icon: Watch, color: "text-rose-200 bg-rose-300/10" },
  { title: "Jewellery", value: "jewelery", detail: "Details that stand out", icon: Gem, color: "text-violet-200 bg-violet-300/10" },
];

const CategorySection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-9 sm:py-12">
      <div className="site-container">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Browse your way</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">Shop by category</h2>
          </div>
          <button onClick={() => navigate("/main/shop")} className="inline-flex items-center gap-1.5 text-sm font-bold text-lime-200 hover:text-lime-100">
            See everything <ArrowRight size={16} />
          </button>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ title, value, detail, icon, color }) => {
            const Icon = icon;
            return <button
              key={value}
              onClick={() => navigate(`/main/shop?category=${encodeURIComponent(value)}`)}
              className="surface group rounded-2xl p-5 text-left hover:-translate-y-1 hover:border-lime-200/35"
            >
              <span className={`grid h-11 w-11 place-items-center rounded-xl ${color}`}><Icon size={21} /></span>
              <h3 className="mt-7 text-lg font-bold text-white">{title}</h3>
              <p className="mt-1 text-sm leading-5 text-slate-400">{detail}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-xs font-bold text-lime-200 opacity-70 transition group-hover:opacity-100">Explore <ArrowRight size={14} /></span>
            </button>;
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
