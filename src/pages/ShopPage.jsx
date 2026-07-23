import React, { useEffect, useState } from "react";
import axios from "axios";
import { Search } from "lucide-react";
import { useSearchParams } from "react-router";
import ProductCard from "../component/ProductCard";

const ShopPage = () => {
  const [productsData, setProductsData] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");
  const [searchParams, setSearchParams] = useSearchParams();

  const getProductData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProductsData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  useEffect(() => {
    const category = searchParams.get("category") || "All";
    setSelectedCategory(category);
  }, [searchParams]);

  let filteredProducts = [...productsData].filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (sortOption === "lowToHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sortOption === "highToLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white px-8 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold">All Products</h1>

        <p className="text-gray-400 mt-2">
          {filteredProducts.length} products found
        </p>

        {/* Search & Filters */}
        <div className="grid grid-cols-5 gap-4 mt-8 border border-gray-700 rounded-2xl p-4">
          <div className="flex items-center bg-[#1C1C1C] rounded-xl px-4 py-3 col-span-3">
            <Search className="text-gray-400" size={20} />

            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none ml-3 flex-1 text-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Category */}
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => {
                const value = e.target.value;
                setSelectedCategory(value);
                if (value === "All") {
                  setSearchParams({});
                } else {
                  setSearchParams({ category: value });
                }
              }}
              className="w-full appearance-none bg-[#1A1A1A] text-white border-2 border-lime-400 rounded-3xl px-6 py-4 text-lg outline-none cursor-pointer"
            >
              <option value="All">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="women's clothing">Women's Clothing</option>
              <option value="jewelery">Jewelery</option>
            </select>

            <span className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
              ▼
            </span>
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="w-full appearance-none bg-[#1A1A1A] text-white border-2 border-lime-400 rounded-3xl px-6 py-4 text-lg outline-none cursor-pointer"
            >
              <option value="default">Featured</option>
              <option value="lowToHigh">Price Low to High</option>
              <option value="highToLow">Price High to Low</option>
            </select>

            <span className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
              ▼
            </span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7 mt-10">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
