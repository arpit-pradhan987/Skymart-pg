import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

const categories = [
  {
    id: 1,
    icon: "💻",
    title: "Electronics",
    value: "electronics",
    items: 6,
  },
  {
    id: 2,
    icon: "📦",
    title: "Men's Clothing",
    value: "men's clothing",
    items: 4,
  },
  {
    id: 3,
    icon: "📦",
    title: "Women's Clothing",
    value: "women's clothing",
    items: 6,
  },
  {
    id: 4,
    icon: "📦",
    title: "Jewelery",
    value: "jewelery",
    items: 4,
  },
];

const CategorySection = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#0B0B0B] py-3">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-4xl font-bold text-white">Shop by Category</h2>

          <button
            onClick={() => {
              navigate("/main/shop");
            }}
            className="flex items-center gap-2 text-xl font-semibold text-lime-400 hover:text-lime-300"
          >
            View All
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Categories */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() =>
                navigate(
                  `/main/shop?category=${encodeURIComponent(category.value)}`,
                )
              }
              className="flex h-48 cursor-pointer flex-col items-center justify-center rounded-3xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="mb-5 text-5xl">{category.icon}</div>

              <h3 className="text-3xl font-semibold text-zinc-800">
                {category.title}
              </h3>

              <p className="mt-2 text-xl text-zinc-500">
                {category.items} items
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
