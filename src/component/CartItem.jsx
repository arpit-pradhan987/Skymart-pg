import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => (
  <article className="rounded-2xl border border-slate-200 bg-white p-3.5 shadow-[0_4px_14px_rgba(31,57,42,.06)]">
    <div className="flex gap-3.5">
      <div className="grid h-[5.5rem] w-[5.5rem] shrink-0 place-items-center rounded-xl bg-[#f0f6ef] p-3">
        <img src={item.image} alt={item.title} className="h-full w-full object-contain mix-blend-multiply" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start gap-2">
          <div className="min-w-0 flex-1">
            <h3 className="line-clamp-2 text-sm font-extrabold leading-5 text-slate-900">{item.title}</h3>
            <p className="mt-1 text-[11px] font-semibold capitalize text-slate-500">{item.category}</p>
          </div>
          <button onClick={onRemove} className="grid h-8 w-8 place-items-center rounded-lg text-slate-400 hover:bg-rose-50 hover:text-rose-600" aria-label={`Remove ${item.title}`}>
            <Trash2 size={16} />
          </button>
        </div>
        <div className="mt-3.5 flex items-center justify-between gap-3">
          <div className="flex items-center rounded-lg border border-slate-200 bg-[#f7faf6] p-0.5 shadow-inner">
            <button onClick={onDecrease} className="grid h-7 w-7 place-items-center rounded-md text-slate-500 hover:bg-white hover:text-[#246542]" aria-label={`Decrease ${item.title} quantity`}><Minus size={14} /></button>
            <span className="w-8 text-center text-xs font-extrabold text-slate-800">{item.quantity}</span>
            <button onClick={onIncrease} className="grid h-7 w-7 place-items-center rounded-md bg-white text-[#246542] shadow-sm hover:bg-[#e8f6e7]" aria-label={`Increase ${item.title} quantity`}><Plus size={14} /></button>
          </div>
          <div className="text-right"><p className="text-base font-extrabold text-[#166439]">${(item.price * item.quantity).toFixed(2)}</p>{item.quantity > 1 ? <p className="mt-0.5 text-[10px] font-medium text-slate-400">${item.price.toFixed(2)} each</p> : null}</div>
        </div>
      </div>
    </div>
  </article>
);

export default CartItem;
