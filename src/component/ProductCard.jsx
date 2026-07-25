import React, { useContext } from "react";
import { ArrowUpRight, ShoppingBag, Star } from "lucide-react";
import { useNavigate } from "react-router";
import { Main } from "../cosntext/MainContext.jsx";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(Main);
  const rating = product.rating?.rate ?? 0;
  const reviewCount = product.rating?.count ?? 0;

  return (
    <article className="surface group flex min-w-0 flex-col overflow-hidden rounded-2xl hover:-translate-y-1 hover:border-lime-200/35">
      <button
        onClick={() => navigate(`/main/product/${product.id}`)}
        className="relative grid h-52 place-items-center overflow-hidden bg-[#eff4ef] p-7 text-left sm:h-56"
        aria-label={`View ${product.title}`}
      >
        <span className="absolute left-3 top-3 rounded-full bg-[#102618] px-2.5 py-1 text-[10px] font-bold capitalize tracking-wide text-lime-100">
          {product.category}
        </span>
        <img src={product.image} alt="" className="h-full w-full object-contain mix-blend-multiply transition duration-300 group-hover:scale-105" />
        <span className="absolute bottom-3 right-3 grid h-8 w-8 place-items-center rounded-full bg-white text-[#12331e] opacity-0 shadow-sm transition group-hover:opacity-100">
          <ArrowUpRight size={16} />
        </span>
      </button>

      <div className="flex flex-1 flex-col p-4">
        <button onClick={() => navigate(`/main/product/${product.id}`)} className="text-left">
          <h3 className="min-h-11 text-sm font-bold leading-5 text-white transition group-hover:text-lime-100">{product.title}</h3>
        </button>
        <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-400">
          <Star size={14} className="fill-amber-300 text-amber-300" />
          <span className="font-bold text-slate-200">{rating.toFixed(1)}</span>
          <span>({reviewCount})</span>
        </div>
        <div className="mt-4 flex items-center justify-between gap-2 border-t border-white/8 pt-4">
          <span className="text-xl font-extrabold tracking-tight text-white">${product.price.toFixed(2)}</span>
          <button
            onClick={() => addToCart(product)}
            className="primary-button gap-1.5 px-3 py-2 text-xs"
            aria-label={`Add ${product.title} to cart`}
          >
            <ShoppingBag size={15} /> Add
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
