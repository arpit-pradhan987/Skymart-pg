import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ArrowLeft, ChevronLeft, ChevronRight, Heart, RotateCcw, ShieldCheck, ShoppingBag, Star, Truck } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router";
import ProductCard from "../component/ProductCard";
import { Main } from "../cosntext/MainContext.jsx";

const benefits = [
  { icon: Truck, title: "Free delivery", detail: "On orders over $50" },
  { icon: RotateCcw, title: "30-day returns", detail: "Easy, no-fuss process" },
  { icon: ShieldCheck, title: "Secure payment", detail: "Protected checkout" },
];

const ProductView = () => {
  const { addToCart } = useContext(Main);
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [status, setStatus] = useState("loading");
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    let active = true;
    window.scrollTo({ top: 0, behavior: "smooth" });
    setStatus("loading");
    setIsSaved(false);
    Promise.resolve(axios.get(`https://fakestoreapi.com/products/${id}`))
      .then(async (res) => {
        const relatedRes = await axios.get(`https://fakestoreapi.com/products/category/${encodeURIComponent(res.data.category)}`);
        if (!active) return;
        setProduct(res.data);
        setRelatedProducts(relatedRes.data.filter((item) => item.id !== res.data.id).slice(0, 4));
        setStatus("ready");
      })
      .catch(() => active && setStatus("error"));
    return () => { active = false; };
  }, [id]);

  if (status === "loading") {
    return <div className="site-container py-8 sm:py-12"><div className="skeleton h-5 w-48 rounded" /><div className="mt-8 grid gap-8 lg:grid-cols-2"><div className="skeleton h-[30rem] rounded-3xl" /><div className="space-y-5"><div className="skeleton h-6 w-24 rounded" /><div className="skeleton h-16 w-5/6 rounded" /><div className="skeleton h-10 w-36 rounded" /><div className="skeleton h-32 rounded-2xl" /></div></div></div>;
  }

  if (status === "error" || !product) {
    return <div className="site-container py-20 text-center"><div className="surface mx-auto max-w-md rounded-2xl p-8"><h1 className="text-xl font-bold text-white">We couldn’t find that product.</h1><p className="mt-2 text-sm text-slate-400">It may no longer be available, or the connection was interrupted.</p><Link to="/main/shop" className="primary-button mt-6 px-4 py-2.5 text-sm">Back to the shop</Link></div></div>;
  }

  const rating = product.rating?.rate ?? 0;
  const reviewCount = product.rating?.count ?? 0;

  return (
    <div className="page-enter py-7 sm:py-10">
      <div className="site-container">
        <nav className="flex min-w-0 items-center gap-2 text-sm text-slate-400" aria-label="Breadcrumb">
          <Link to="/main/shop" className="inline-flex items-center gap-1.5 font-semibold hover:text-lime-100"><ArrowLeft size={16} /> Shop</Link>
          <span className="text-slate-600">/</span>
          <span className="capitalize">{product.category}</span>
          <span className="text-slate-600">/</span>
          <span className="truncate text-slate-300">{product.title}</span>
        </nav>

        <div className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,.9fr)] lg:items-start xl:gap-14">
          <div className="surface relative grid min-h-[22rem] place-items-center overflow-hidden rounded-3xl bg-[#eff4ef] p-8 sm:min-h-[34rem] sm:p-14">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/55 to-transparent" />
            <img src={product.image} alt={product.title} className="relative max-h-[22rem] w-full object-contain sm:max-h-[28rem]" />
          </div>

          <div className="lg:py-3">
            <span className="inline-flex rounded-full border border-lime-200/20 bg-lime-300/10 px-3 py-1 text-xs font-bold capitalize text-lime-100">{product.category}</span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.035em] text-white sm:text-4xl xl:text-5xl">{product.title}</h1>
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
              <div className="flex items-center gap-1.5"><Star size={18} className="fill-amber-300 text-amber-300" /><span className="font-extrabold text-white">{rating.toFixed(1)}</span><span className="text-sm text-slate-400">from {reviewCount} reviews</span></div>
              <span className="hidden h-4 w-px bg-white/15 sm:block" />
              <span className="text-sm font-medium text-lime-200">In stock and ready to ship</span>
            </div>
            <div className="mt-7 border-y border-white/8 py-6">
              <p className="text-4xl font-extrabold tracking-tight text-white">${product.price.toFixed(2)}</p>
              <p className="mt-3 text-sm leading-6 text-slate-400">{product.description}</p>
            </div>
            <div className="mt-6 flex gap-3">
              <button onClick={() => addToCart(product)} className="primary-button min-h-12 flex-1 gap-2 px-5 py-3 text-sm"><ShoppingBag size={18} /> Add to cart</button>
              <button onClick={() => setIsSaved((saved) => !saved)} className={`icon-button h-12 w-12 ${isSaved ? "border-rose-300/50 bg-rose-300/10 text-rose-200" : ""}`} aria-label={isSaved ? "Remove from saved products" : "Save product"} aria-pressed={isSaved}><Heart size={19} fill={isSaved ? "currentColor" : "none"} /></button>
            </div>
            <div className="mt-6 grid gap-2 sm:grid-cols-3">
              {benefits.map(({ icon, title, detail }) => { const Icon = icon; return <div key={title} className="surface-muted rounded-xl p-3.5"><Icon size={17} className="text-lime-200" /><p className="mt-3 text-xs font-bold text-white">{title}</p><p className="mt-0.5 text-[11px] leading-4 text-slate-400">{detail}</p></div>; })}
            </div>
            <div className="mt-7 grid grid-cols-2 gap-3">
              <button onClick={() => Number(id) > 1 && navigate(`/main/product/${Number(id) - 1}`)} disabled={Number(id) <= 1} className="secondary-button min-h-11 gap-1.5 px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-35"><ChevronLeft size={17} /> Previous</button>
              <button onClick={() => Number(id) < 20 && navigate(`/main/product/${Number(id) + 1}`)} disabled={Number(id) >= 20} className="secondary-button min-h-11 gap-1.5 px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-35">Next <ChevronRight size={17} /></button>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 ? <section className="mt-16 sm:mt-20"><div className="mb-6"><p className="eyebrow">Keep exploring</p><h2 className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">You may also like</h2></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{relatedProducts.map((related) => <ProductCard key={related.id} product={related} />)}</div></section> : null}
      </div>
    </div>
  );
};

export default ProductView;
