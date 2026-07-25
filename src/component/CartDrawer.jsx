import React, { useContext } from "react";
import {
  ArrowRight,
  Box,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  X,
} from "lucide-react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { Main } from "../cosntext/MainContext";

const CartDrawer = () => {
  const {
    cartItems,
    setShowCart,
    totalItems,
    totalPrice,
    clearCart,
    updateQuantity,
    removeFromCart,
  } = useContext(Main);

  return (
    <div
      onClick={() => setShowCart(false)}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur h-screen flex justify-end "
    >
      <aside
        onClick={(e) => e.stopPropagation()}
        className="w-30  max-w-[500px] h-screen bg-[#111111] border-l border-white/10 flex flex-col text-white"
      >
        {/* Header */}
        <header className="h-24 border-b border-white/10 px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <ShoppingBag className="text-[#d9ff4e]" size={22} />

            <h2 className="text-4xl font-bold">Cart</h2>

            {totalItems > 0 && (
              <span className="px-4 py-1 rounded-full bg-[#d9ff4e]/20 text-[#d9ff4e] text-sm font-bold">
                {totalItems} Items
              </span>
            )}
          </div>

          <button
            onClick={() => setShowCart(false)}
            className="text-zinc-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </header>

        {cartItems.length ? (
          <>
            {/* Products */}
            <div className="flex-1 overflow-y-auto p-8 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-3xl border border-zinc-600 bg-[#161616] p-5"
                >
                  <div className="flex gap-5">
                    {/* Image */}
                    <div className="w-24 h-24 bg-white rounded-2xl overflow-hidden p-2 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-semibold line-clamp-2">
                          {item.title}
                        </h3>

                        <p className="text-[#d9ff4e] text-3xl font-bold mt-2">
                          ${item.price.toFixed(2)}
                        </p>

                        <p className="text-zinc-500 text-sm">
                          ${item.price.toFixed(2)} each
                        </p>
                      </div>

                      <div className="flex items-end justify-between mt-6">
                        {/* Quantity */}
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-10 h-10 rounded-xl border border-zinc-700 flex items-center justify-center hover:border-white transition"
                          >
                            <Minus size={18} />
                          </button>

                          <span className="text-lg font-bold w-5 text-center">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-10 h-10 rounded-xl border border-zinc-700 flex items-center justify-center hover:border-[#d9ff4e] hover:text-[#d9ff4e] transition"
                          >
                            <Plus size={18} />
                          </button>
                        </div>

                        {/* Delete */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-400"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <footer className="border-t border-white/10 p-8 bg-[#111111]">
              <div className="flex justify-between items-center">
                <span className="text-xl text-zinc-400">Total</span>

                <span className="text-5xl font-bold">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <button
                onClick={() =>
                  toast.info("Checkout will be available in the next update.")
                }
                className="mt-8 w-full h-16 rounded-2xl bg-red-500 hover:bg-[#e8ff6d] transition flex items-center justify-center gap-3 text-white text-xl font-bold"
              >
                Checkout
                <ArrowRight size={24} />
              </button>

              <button
                onClick={clearCart}
                className="w-full mt-6 text-zinc-500  hover:text-white transition"
              >
                Clear cart
              </button>
            </footer>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <div className="w-24 h-24 rounded-3xl bg-red-500 border border-white/10 flex items-center justify-center">
              <Box size={42} />
            </div>

            <h2 className="mt-6 text-2xl font-bold">Your cart is empty</h2>

            <p className="text-zinc-500 mt-2">
              Looks like you haven't added anything yet.
            </p>

            <Link
              to="/main/shop"
              onClick={() => setShowCart(false)}
              className="mt-8 bg-red-400 text-white font-bold rounded-2xl px-8 py-4 flex items-center gap-2 hover:bg-[#e8ff6d]"
            >
              Browse Products
              <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </aside>
    </div>
  );
};

export default CartDrawer;
