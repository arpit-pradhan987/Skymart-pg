import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { ArrowUpDown, PackageSearch, Search, SlidersHorizontal, X } from "lucide-react";
import { useSearchParams } from "react-router";
import ProductCard from "../component/ProductCard";

const categories = [
  { value: "All", label: "All products" },
  { value: "electronics", label: "Electronics" },
  { value: "men's clothing", label: "Men's clothing" },
  { value: "women's clothing", label: "Women's clothing" },
  { value: "jewelery", label: "Jewellery" },
];

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("featured");
  const [status, setStatus] = useState("loading");
  const [searchParams, setSearchParams] = useSearchParams();

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

  useEffect(() => {
    const category = searchParams.get("category") || "All";
    setSelectedCategory(categories.some((item) => item.value === category) ? category : "All");
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
      return matchesSearch && (selectedCategory === "All" || product.category === selectedCategory);
    });
    if (sortOption === "lowToHigh") return [...filtered].sort((a, b) => a.price - b.price);
    if (sortOption === "highToLow") return [...filtered].sort((a, b) => b.price - a.price);
    if (sortOption === "rating") return [...filtered].sort((a, b) => b.rating.rate - a.rating.rate);
    return filtered;
  }, [products, search, selectedCategory, sortOption]);

  const updateCategory = (value) => {
    setSelectedCategory(value);
    setSearchParams(value === "All" ? {} : { category: value });
  };

  const clearFilters = () => {
    setSearch("");
    setSortOption("featured");
    updateCategory("All");
  };

  const hasFilters = search || selectedCategory !== "All" || sortOption !== "featured";

  return (
    <div className="page-enter py-8 sm:py-12">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">The SkyMart collection</p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl">Find your next favourite.</h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">Straightforward filters, clear product details, and a collection curated to make browsing feel easy.</p>
          </div>
          {status === "ready" ? <p className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm font-medium text-slate-300">{filteredProducts.length} of {products.length} products</p> : null}
        </div>

        <div className="surface mt-8 rounded-2xl p-3 sm:p-4">
          <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_13rem_13rem]">
            <label className="relative block">
              <Search size={18} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input value={search} onChange={(event) => setSearch(event.target.value)} type="search" placeholder="Search the collection" className="input-base h-11 pl-10 pr-10 text-sm" />
              {search ? <button onClick={() => setSearch("")} className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white" aria-label="Clear search"><X size={16} /></button> : null}
            </label>
            <label className="relative">
              <SlidersHorizontal size={16} className="pointer-events-none absolute left-3.5 top-1/2 z-10 -translate-y-1/2 text-slate-500" />
              <select value={selectedCategory} onChange={(event) => updateCategory(event.target.value)} className="input-base h-11 appearance-none pl-10 pr-3 text-sm">
                {categories.map((category) => <option key={category.value} value={category.value}>{category.label}</option>)}
              </select>
            </label>
            <label className="relative">
              <ArrowUpDown size={16} className="pointer-events-none absolute left-3.5 top-1/2 z-10 -translate-y-1/2 text-slate-500" />
              <select value={sortOption} onChange={(event) => setSortOption(event.target.value)} className="input-base h-11 appearance-none pl-10 pr-3 text-sm">
                <option value="featured">Featured first</option>
                <option value="rating">Top rated</option>
                <option value="lowToHigh">Price: low to high</option>
                <option value="highToLow">Price: high to low</option>
              </select>
            </label>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-semibold uppercase tracking-wide text-slate-500">Popular</span>
            {categories.slice(1).map((category) => (
              <button key={category.value} onClick={() => updateCategory(category.value)} className={`rounded-full px-3 py-1.5 text-xs font-bold ${selectedCategory === category.value ? "bg-lime-300 text-[#102618]" : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08]"}`}>
                {category.label}
              </button>
            ))}
            {hasFilters ? <button onClick={clearFilters} className="ml-auto text-xs font-bold text-lime-200 hover:text-lime-100">Clear filters</button> : null}
          </div>
        </div>

        {status === "loading" ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }, (_, index) => <div key={index} className="surface overflow-hidden rounded-2xl"><div className="skeleton h-56" /><div className="space-y-3 p-4"><div className="skeleton h-5 w-full rounded" /><div className="skeleton h-5 w-2/3 rounded" /><div className="skeleton h-9 rounded" /></div></div>)}
          </div>
        ) : status === "error" ? (
          <div className="surface mt-8 rounded-2xl px-6 py-16 text-center"><PackageSearch className="mx-auto text-lime-200" size={32} /><h2 className="mt-4 text-xl font-bold text-white">The collection is taking a moment.</h2><p className="mt-2 text-sm text-slate-400">Please check your connection and try again.</p><button onClick={() => window.location.reload()} className="primary-button mt-5 px-4 py-2.5 text-sm">Reload products</button></div>
        ) : filteredProducts.length ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        ) : (
          <div className="surface mt-8 rounded-2xl px-6 py-16 text-center"><PackageSearch className="mx-auto text-lime-200" size={32} /><h2 className="mt-4 text-xl font-bold text-white">No exact matches.</h2><p className="mt-2 text-sm text-slate-400">Try a broader search or reset your filters.</p><button onClick={clearFilters} className="primary-button mt-5 px-4 py-2.5 text-sm">Reset filters</button></div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
