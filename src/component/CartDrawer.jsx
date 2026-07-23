import React, { useContext } from "react";
import { ShoppingBag, X, ArrowRight, Package } from "lucide-react";
import { Link } from "react-router";

import CartItem from "./CartItem";
import { Main } from "../cosntext/MainContext.jsx";

const CartDrawer = () => {
  const {
    cartItems,
    setShowCart,
    totalPrice,
    clearCart,
    updateQuantity,
    removeFromCart,
  } = useContext(Main);

  return (
    <div
      onClick={() => setShowCart(false)}
      className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="flex h-screen w-full max-w-md flex-col border-l border-zinc-700 bg-[#121212]"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-700 px-6 py-5">
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-lime-400" />

            <h2 className="text-2xl font-semibold text-white">Cart</h2>

            <span className="rounded-full bg-lime-400/20 px-3 py-1 text-sm font-medium text-lime-400">
              {cartItems.length} Items
            </span>
          </div>

          <button onClick={() => setShowCart(false)}>
            <X className="text-zinc-400 hover:text-white" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 space-y-5 overflow-y-auto p-6">
          {cartItems.length ? (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncrease={() => updateQuantity(item.id, 1)}
                onDecrease={() => updateQuantity(item.id, -1)}
                onRemove={() => removeFromCart(item.id)}
              />
            ))
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-6 text-center text-gray-300">
              <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-zinc-800 text-lime-400">
                <Package size={38} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Cart is empty
                </h3>
                <p className="mt-2 text-sm text-zinc-500">
                  Go shop something cool!
                </p>
              </div>
              <Link
                to="/main/shop"
                className="inline-flex rounded-3xl bg-lime-400 px-8 py-4 text-sm font-semibold text-black hover:bg-lime-300"
                onClick={() => setShowCart(false)}
              >
                Browse Products
              </Link>
            </div>
          )}
        </div>

        {cartItems.length > 0 ? (
          <div className="border-t border-zinc-700 p-6">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xl text-zinc-400">Total</span>

              <span className="text-4xl font-bold text-white">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-lime-400 py-4 text-xl font-semibold text-black hover:bg-lime-300">
              Checkout
              <ArrowRight />
            </button>

            <button
              onClick={clearCart}
              className="mt-5 w-full text-center text-zinc-500 hover:text-red-400"
            >
              Clear cart
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CartDrawer;
