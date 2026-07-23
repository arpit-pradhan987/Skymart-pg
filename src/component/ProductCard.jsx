import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Star, ShoppingCart } from "lucide-react";
import { Main } from "../cosntext/MainContext.jsx";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(Main);

  const handleProductClick = () => {
    navigate(`/main/product/${product.id}`);
  };

  const handleAddClick = (event) => {
    event.stopPropagation();
    addToCart(product);
  };

  return (
    <div
      onClick={handleProductClick}
      className="bg-[#121212] border border-gray-700 rounded-3xl overflow-hidden hover:border-lime-400 transition-all duration-300 cursor-pointer"
    >
      {/* Category */}
      <div className="p-4 pb-0">
        <span className="bg-gray-600 text-white text-xs px-3 py-1 rounded-full capitalize">
          {product.category}
        </span>
      </div>

      {/* Image */}
      <div className="bg-white h-72 flex items-center justify-center p-8">
        <img
          src={product.image}
          alt={product.title}
          className="h-52 object-contain hover:scale-105 transition"
        />
      </div>

      {/* Details */}
      <div className="p-5">
        <p className="text-gray-400 text-sm capitalize">{product.category}</p>

        <h2 className="font-semibold text-xl mt-2 line-clamp-2 h-14">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={16}
              className={
                star <= Math.round(product.rating.rate)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-600"
              }
            />
          ))}

          <span className="text-gray-400 text-sm ml-2">
            ({product.rating.count})
          </span>
        </div>

        <hr className="my-4 border-gray-700" />

        {/* Price */}
        <div className="flex justify-between items-center">
          <h3 className="text-3xl font-bold text-lime-400">${product.price}</h3>

          <button
            onClick={handleAddClick}
            className="flex items-center gap-2 bg-lime-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-lime-300"
          >
            <ShoppingCart size={18} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
