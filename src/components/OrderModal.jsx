import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Phone, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/useCart';

export default function OrderModal() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartSubtotal,
    tax,
    cartTotal,
    cartCount
  } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [pickupTime, setPickupTime] = useState('ASAP (Approx 15-25 mins)');
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  if (!isCartOpen) return null;

  // Format order summary for SMS / Call
  const generateOrderSummary = () => {
    const lines = [
      `*GOSHEN KITCHEN ORDER REQUEST*`,
      `Customer: ${customerName || 'Guest'}`,
      `Phone: ${customerPhone || 'Not provided'}`,
      `Pickup Time: ${pickupTime}`,
      `---------------------`,
      ...cartItems.map(
        item =>
          `• ${item.quantity}x ${item.name} ($${(item.price * item.quantity).toFixed(2)})${
            Object.values(item.selectedOptions || {}).length > 0
              ? ` [${Object.values(item.selectedOptions).join(', ')}]`
              : ''
          }${item.specialInstructions ? ` (Note: ${item.specialInstructions})` : ''}`
      ),
      `---------------------`,
      `Subtotal: $${cartSubtotal.toFixed(2)}`,
      `Estimated Tax: $${tax.toFixed(2)}`,
      `Total: $${cartTotal.toFixed(2)}`,
      `Location: 4000 Bear Cat Way, Ste 104, Morrisville, NC`
    ];
    return lines.join('\n');
  };

  const handleSendOrder = (type) => {
    const summary = generateOrderSummary();
    if (type === 'call') {
      window.location.href = 'tel:9195592586';
      setOrderSubmitted(true);
    } else if (type === 'sms') {
      const encoded = encodeURIComponent(summary);
      window.open(`sms:9195592586?&body=${encoded}`, '_blank');
      setOrderSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-950/70 backdrop-blur-xs flex justify-end">
      <div 
        className="relative bg-white w-full max-w-md h-full shadow-2xl flex flex-col border-l border-stone-200 animate-in slide-in-from-right duration-300"
        role="dialog"
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 bg-stone-50 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-orange-100 text-orange-700 rounded-xl">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif-display text-lg font-bold text-stone-900">
                Your Order Bag
              </h2>
              <p className="text-xs text-stone-500">
                {cartCount} {cartCount === 1 ? 'item' : 'items'} selected
              </p>
            </div>
          </div>
          
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-200 transition-colors cursor-pointer"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {orderSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold font-serif-display text-stone-900">
                Order Sent to Kitchen!
              </h3>
              <p className="text-stone-600 text-sm max-w-xs mx-auto">
                Thank you! Our kitchen team at 4000 Bear Cat Way, Ste 104 is getting your fresh meal ready.
              </p>
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 text-left text-xs font-mono space-y-1 text-stone-700">
                <p className="font-bold text-stone-900">Order Reference Summary:</p>
                <p>Est. Total: ${cartTotal.toFixed(2)}</p>
                <p>Pickup: {pickupTime}</p>
                <p>Kitchen Line: (919) 559-2586</p>
              </div>
              <div className="pt-4 flex flex-col gap-2">
                <a
                  href="tel:9195592586"
                  className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white font-bold py-2.5 px-4 rounded-xl shadow-md text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call to Speak with Counter</span>
                </a>
                <button
                  onClick={() => {
                    clearCart();
                    setOrderSubmitted(false);
                    setIsCartOpen(false);
                  }}
                  className="text-stone-500 hover:text-stone-800 text-xs py-2 cursor-pointer font-medium"
                >
                  Start New Order
                </button>
              </div>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-16 h-16 bg-stone-100 text-stone-400 rounded-full flex items-center justify-center mx-auto">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="font-serif-display text-lg font-bold text-stone-800">
                Your order bag is empty
              </h3>
              <p className="text-xs text-stone-500 max-w-xs mx-auto">
                Explore our Made-to-Order breakfast plates, artisan sandwiches, or authentic West African specialties to begin.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-3 inline-flex items-center gap-1.5 text-orange-600 hover:text-orange-700 font-bold text-xs"
              >
                <span>Browse Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <>
              {/* Item List */}
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div
                    key={item.cartItemId}
                    className="p-3.5 rounded-xl border border-stone-200 bg-white hover:border-orange-300 transition-colors shadow-2xs space-y-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-semibold text-stone-900 text-sm">
                          {item.name}
                        </h4>
                        <span className="text-orange-600 font-bold text-xs">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-stone-400 hover:text-red-500 p-1 rounded transition-colors cursor-pointer"
                        title="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Selected Options */}
                    {Object.entries(item.selectedOptions || {}).length > 0 && (
                      <div className="text-[11px] text-stone-600 bg-stone-50 p-2 rounded-lg border border-stone-100 space-y-0.5">
                        {Object.entries(item.selectedOptions).map(([k, v]) => (
                          <div key={k} className="flex justify-between">
                            <span className="text-stone-400 capitalize">{k.replace(/([A-Z])/g, ' $1')}:</span>
                            <span className="font-medium text-stone-800">{v}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {item.specialInstructions && (
                      <p className="text-[11px] text-stone-500 italic bg-amber-50/60 px-2 py-1 rounded border border-amber-100">
                        Note: {item.specialInstructions}
                      </p>
                    )}

                    {/* Quantity controls */}
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs text-stone-400">Qty:</span>
                      <div className="flex items-center border border-stone-200 rounded-lg bg-stone-50 text-xs">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="px-2 py-1 text-stone-600 hover:text-stone-900 cursor-pointer"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2 font-bold text-stone-800">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="px-2 py-1 text-stone-600 hover:text-stone-900 cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pickup and Customer Details */}
              <div className="border-t border-stone-200 pt-4 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-orange-600" />
                  <span>Pickup Details</span>
                </h4>

                <div className="space-y-2">
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Your Full Name"
                    className="w-full text-xs p-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="Phone Number for Pickup Alert"
                    className="w-full text-xs p-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  
                  <select
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                  >
                    <option value="ASAP (Approx 15-25 mins)">ASAP (Approx 15–25 mins)</option>
                    <option value="In 45 Minutes">In 45 Minutes</option>
                    <option value="In 1 Hour">In 1 Hour</option>
                    <option value="Lunch Rush (12:00 PM – 1:00 PM)">Lunch Rush (12:00 PM – 1:00 PM)</option>
                    <option value="Afternoon Pickup (2:00 PM – 4:00 PM)">Afternoon Pickup (2:00 PM – 4:00 PM)</option>
                  </select>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer with Totals and Action Buttons */}
        {cartItems.length > 0 && !orderSubmitted && (
          <div className="p-4 sm:p-5 border-t border-stone-200 bg-stone-50 space-y-3 shrink-0">
            {/* Price Calculations */}
            <div className="space-y-1.5 text-xs text-stone-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-stone-800">${cartSubtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated NC Sales Tax (7.25%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-stone-900 border-t border-stone-200 pt-1.5">
                <span>Estimated Total</span>
                <span className="text-orange-600 font-extrabold">${cartTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2 pt-1">
              <button
                onClick={() => handleSendOrder('call')}
                className="w-full inline-flex items-center justify-center gap-2 bg-linear-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all cursor-pointer text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Kitchen to Place: (919) 559-2586</span>
              </button>

              <button
                onClick={() => handleSendOrder('sms')}
                className="w-full inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-medium py-2 px-4 rounded-xl text-xs transition-colors cursor-pointer"
              >
                <span>Send Order via Text / SMS</span>
              </button>

              <button
                onClick={clearCart}
                className="w-full text-center text-[11px] text-stone-400 hover:text-red-500 py-1 transition-colors cursor-pointer"
              >
                Clear Entire Bag
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
