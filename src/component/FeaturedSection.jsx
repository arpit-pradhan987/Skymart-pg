import React, { useContext, useEffect, useState } from "react";
import { ArrowRight, ShoppingBag, Sparkles, Star } from "lucide-react";
import { useNavigate } from "react-router";
import axios from "axios";
import { Main } from "../cosntext/MainContext.jsx";

const Collection = ({ title, subtitle, icon, items, onOpen, onAdd }) => {
  const Icon = icon;
  return <div className="surface rounded-2xl p-5 sm:p-6">
    <div className="flex items-start justify-between gap-4">
      <div className="flex gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-lime-300/10 text-lime-200"><Icon size={19} /></span>
        <div>
          <h2 className="font-extrabold text-white">{title}</h2>
          <p className="mt-0.5 text-xs text-slate-400">{subtitle}</p>
        </div>
      </div>
      <button onClick={onOpen} className="text-xs font-bold text-lime-200 hover:text-lime-100">View all</button>
    </div>
    <div className="mt-5 divide-y divide-white/8">
      {items.map((item) => (
        <div key={item.id} className="group flex items-center gap-3 py-3 first:pt-0 last:pb-0">
          <button onClick={() => onOpen(item.id)} className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#eff4ef] p-2">
            <img src={item.image} alt="" className="h-full w-full object-contain mix-blend-multiply" />
          </button>
          <button onClick={() => onOpen(item.id)} className="min-w-0 flex-1 text-left">
            <p className="truncate text-sm font-semibold text-slate-100 group-hover:text-lime-100">{item.title}</p>
            <p className="mt-0.5 text-xs text-slate-400">${item.price.toFixed(2)} · {item.rating?.rate?.toFixed(1)} rated</p>
          </button>
          <button onClick={() => onAdd(item)} className="icon-button h-9 w-9 rounded-lg" aria-label={`Add ${item.title} to cart`}>
            <ShoppingBag size={16} />
          </button>
        </div>
      ))}
    </div>
  </div>;
};

const FeaturedSection = () => {
  const navigate = useNavigate();
  const { addToCart } = useContext(Main);
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let active = true;
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        if (active) {
          setProducts(res.data);
          setStatus("ready");
        }
      })
      .catch(() => active && setStatus("error"));
    return () => { active = false; };
  }, []);

  const openProduct = (id) => navigate(id ? `/main/product/${id}` : "/main/shop");
  const selections = [
    { title: "Top rated", subtitle: "Loved by shoppers", icon: Star, items: [...products].sort((a, b) => b.rating.rate - a.rating.rate).slice(0, 4) },
    { title: "Fresh arrivals", subtitle: "Recently added to the shop", icon: Sparkles, items: [...products].sort((a, b) => b.id - a.id).slice(0, 4) },
  ];

  return (
    <section className="py-6 sm:py-10">
      <div className="site-container">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Made for you</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">A little inspiration</h2>
          </div>
          <button onClick={() => navigate("/main/shop")} className="inline-flex items-center gap-1.5 text-sm font-bold text-lime-200 hover:text-lime-100">Open shop <ArrowRight size={16} /></button>
        </div>
        {status === "loading" ? (
          <div className="grid gap-3 lg:grid-cols-2">{[0, 1].map((item) => <div key={item} className="surface rounded-2xl p-6"><div className="skeleton h-10 w-44 rounded-xl" /><div className="mt-6 space-y-4">{[0, 1, 2, 3].map((row) => <div key={row} className="skeleton h-14 rounded-xl" />)}</div></div>)}</div>
        ) : status === "error" ? (
          <div className="surface rounded-2xl p-8 text-center"><p className="font-semibold text-white">We couldn’t load today’s picks.</p><button onClick={() => window.location.reload()} className="mt-4 text-sm font-bold text-lime-200">Try again</button></div>
        ) : (
          <div className="grid gap-3 lg:grid-cols-2">
            {selections.map((selection) => <Collection key={selection.title} {...selection} onOpen={openProduct} onAdd={addToCart} />)}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedSection;
