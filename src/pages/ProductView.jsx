import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import {
  ArrowLeft,
  Star,
  ShoppingCart,
  Heart,
  Truck,
  ShieldCheck,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useNavigate, useParams, Link } from "react-router";
import ProductCard from "../component/ProductCard";
import { Main } from "../cosntext/MainContext.jsx";

const ProductView = () => {
  const { addToCart } = useContext(Main);
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(res.data);

        const relatedRes = await axios.get(
          `https://fakestoreapi.com/products/category/${encodeURIComponent(
            res.data.category,
          )}`,
        );
        setRelatedProducts(
          relatedRes.data.filter((item) => item.id !== res.data.id).slice(0, 4),
        );
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-black flex justify-center items-center text-white text-3xl">
        Loading...
      </div>
    );
  }

  const previousProduct = () => {
    if (Number(id) > 1) {
      navigate(`/main/product/${Number(id) - 1}`);
    }
  };

  const nextProduct = () => {
    if (Number(id) < 20) {
      navigate(`/main/product/${Number(id) + 1}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white px-8 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-3 text-gray-400 mb-10">
          <Link to="/">
            <ArrowLeft size={18} />
          </Link>

          <span>Products</span>
          <span>/</span>
          <span className="capitalize">{product.category}</span>
          <span>/</span>

          <span className="text-white font-medium truncate">
            {product.title}
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Image */}
          <div className="bg-white rounded-[35px] p-10 flex justify-center items-center h-[620px]">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[450px] object-contain"
            />
          </div>

          {/* Details */}
          <div>
            <span className="px-4 py-1 rounded-full bg-lime-500/10 border border-lime-500 text-lime-400 text-sm font-semibold capitalize">
              {product.category}
            </span>

            <h1 className="text-5xl font-bold mt-8">{product.title}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={20}
                  className={
                    star <= Math.round(product.rating.rate)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-600"
                  }
                />
              ))}

              <span className="text-xl font-semibold ml-2">
                {product.rating.rate}
              </span>

              <span className="text-gray-500 text-xl">
                ({product.rating.count} reviews)
              </span>
            </div>

            <hr className="border-gray-700 my-8" />

            <h2 className="text-6xl font-bold text-lime-400">
              ${product.price}
            </h2>

            <hr className="border-gray-700 my-8" />

            <p className="text-gray-400 text-lg leading-8">
              {product.description}
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-10">
              <button
                onClick={() => addToCart(product)}
                className="flex-1 bg-lime-400 hover:bg-lime-300 text-black font-semibold rounded-2xl py-5 flex justify-center items-center gap-3 text-2xl transition"
              >
                <ShoppingCart size={28} />
                Add to Cart
              </button>

              <button className="w-20 rounded-2xl border border-gray-700 flex justify-center items-center hover:border-lime-400">
                <Heart size={28} />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-5 mt-10">
              <div className="border border-gray-700 rounded-2xl p-6 text-center">
                <Truck className="mx-auto text-lime-400" />
                <h3 className="font-semibold mt-4">Free Delivery</h3>
                <p className="text-gray-500 text-sm">On orders $50+</p>
              </div>

              <div className="border border-gray-700 rounded-2xl p-6 text-center">
                <ShieldCheck className="mx-auto text-lime-400" />
                <h3 className="font-semibold mt-4">Secure Pay</h3>
                <p className="text-gray-500 text-sm">256-bit SSL</p>
              </div>

              <div className="border border-gray-700 rounded-2xl p-6 text-center">
                <RotateCcw className="mx-auto text-lime-400" />
                <h3 className="font-semibold mt-4">Easy Returns</h3>
                <p className="text-gray-500 text-sm">30-day policy</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="grid grid-cols-2 gap-5 mt-14">
              <button
                onClick={previousProduct}
                disabled={Number(id) === 1}
                className="bg-[#202020] rounded-2xl py-5 text-xl flex justify-center items-center gap-3 hover:bg-[#2d2d2d] disabled:opacity-40"
              >
                <ChevronLeft />
                Previous
              </button>

              <button
                onClick={nextProduct}
                disabled={Number(id) === 20}
                className="bg-lime-400 text-black rounded-2xl py-5 text-xl flex justify-center items-center gap-3 hover:bg-lime-300 disabled:opacity-40"
              >
                Next
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 ? (
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-white mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((related) => (
                <ProductCard key={related.id} product={related} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProductView;
