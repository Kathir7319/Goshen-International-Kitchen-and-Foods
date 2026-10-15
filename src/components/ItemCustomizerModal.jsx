import React, { useState } from 'react';
import { X, Plus, Minus, Check, Sparkles } from 'lucide-react';
import { useCart } from '../context/useCart';

export default function ItemCustomizerModal() {
  const { customizingItem, setCustomizingItem, addToCart } = useCart();
  const [selectedOptions, setSelectedOptions] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState('');

  if (!customizingItem) return null;

  // Initialize defaults if not set
  const handleOptionChange = (groupName, value) => {
    setSelectedOptions(prev => ({
      ...prev,
      [groupName]: value
    }));
  };

  const handleAdd = () => {
    addToCart(customizingItem, selectedOptions, quantity, specialInstructions);
    setCustomizingItem(null);
  };

  const optionsEntries = customizingItem.options ? Object.entries(customizingItem.options) : [];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col border border-stone-200 animate-in zoom-in-95 duration-200"
        role="dialog"
      >
        {/* Header with image */}
        <div className="relative h-44 sm:h-52 bg-stone-100 overflow-hidden shrink-0">
          <img
            src={customizingItem.image}
            alt={customizingItem.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-stone-950/80 via-stone-950/30 to-transparent" />
          
          <button
            onClick={() => setCustomizingItem(null)}
            className="absolute top-3 right-3 bg-stone-900/60 hover:bg-stone-900 text-white p-2 rounded-full backdrop-blur-md transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-3 left-4 right-4 text-white">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase bg-orange-600 text-white mb-1">
              {customizingItem.badge || 'Made Fresh'}
            </span>
            <h3 className="font-serif-display text-xl font-bold leading-tight">
              {customizingItem.name}
            </h3>
            <p className="text-amber-300 font-bold text-lg">
              ${customizingItem.price.toFixed(2)}
              {customizingItem.priceNote && <span className="text-xs font-normal text-stone-200 ml-1.5">({customizingItem.priceNote})</span>}
            </p>
          </div>
        </div>

        {/* Scrollable Customization Options */}
        <div className="p-5 overflow-y-auto space-y-5 text-sm">
          <p className="text-stone-600 text-sm leading-relaxed">
            {customizingItem.description}
          </p>

          {/* Options groups */}
          {optionsEntries.map(([groupKey, optionsList]) => {
            const formattedGroupName = groupKey
              .replace(/([A-Z])/g, ' $1')
              .replace(/^./, str => str.toUpperCase());
            const currentSelected = selectedOptions[groupKey] || optionsList[0];

            return (
              <div key={groupKey} className="space-y-2 border-t border-stone-100 pt-3">
                <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                  Select {formattedGroupName}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {optionsList.map((opt) => {
                    const isSelected = currentSelected === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => handleOptionChange(groupKey, opt)}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-xl border text-xs font-medium text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'border-orange-600 bg-orange-50/80 text-orange-950 font-semibold ring-1 ring-orange-500'
                            : 'border-stone-200 hover:border-stone-300 bg-stone-50/50 text-stone-700'
                        }`}
                      >
                        <span>{opt}</span>
                        {isSelected && <Check className="w-4 h-4 text-orange-600 shrink-0 ml-1.5" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* Special Instructions */}
          <div className="border-t border-stone-100 pt-3">
            <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
              Special Kitchen Requests / Allergies
            </label>
            <textarea
              rows={2}
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              placeholder="e.g., Dressing on the side, extra crispy, allergy notice..."
              className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-stone-50/50"
            />
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 border-t border-stone-200 bg-stone-50 flex items-center justify-between gap-3 shrink-0">
          {/* Quantity Controls */}
          <div className="flex items-center border border-stone-300 rounded-xl bg-white shadow-2xs">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 text-stone-600 hover:text-stone-900 cursor-pointer"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center font-bold text-stone-900 text-sm">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 text-stone-600 hover:text-stone-900 cursor-pointer"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Add to order button */}
          <button
            onClick={handleAdd}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-linear-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold py-2.5 px-4 rounded-xl shadow-md cursor-pointer transition-all"
          >
            <Sparkles className="w-4 h-4 text-amber-200" />
            <span>Add to Order • ${(customizingItem.price * quantity).toFixed(2)}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
