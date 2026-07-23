import React from "react";
import { Trash2, Minus, Plus } from "lucide-react";

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="rounded-3xl border border-zinc-600 p-4">
      <div className="flex gap-4">
        <img
          src={item.image}
          alt={item.title}
          className="h-24 w-24 rounded-2xl object-cover"
        />

        <div className="flex flex-1 flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>

            <p className="mt-1 text-2xl font-bold text-lime-400">
              ${item.price}
            </p>

            <p className="text-zinc-500">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={onDecrease}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-700 hover:bg-zinc-800"
              >
                <Minus size={18} className="text-white" />
              </button>

              <span className="text-lg font-semibold text-white">
                {item.quantity}
              </span>

              <button
                onClick={onIncrease}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-700 hover:bg-zinc-800"
              >
                <Plus size={18} className="text-white" />
              </button>
            </div>

            <button onClick={onRemove}>
              <Trash2 className="text-red-500 hover:text-red-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
