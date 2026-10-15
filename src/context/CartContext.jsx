import React, { useState, useEffect } from 'react';
import { CartContext } from './cartContextInstance';

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('goshen_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customizingItem, setCustomizingItem] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('goshen_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Error saving cart:', e);
    }
  }, [cartItems]);

  const addToCart = (item, selectedOptions = {}, quantity = 1, specialInstructions = '') => {
    const cartItemId = `${item.id}-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
    const newItem = {
      cartItemId,
      id: item.id,
      name: item.name,
      basePrice: item.price,
      price: item.price,
      image: item.image,
      category: item.category,
      selectedOptions,
      specialInstructions,
      quantity
    };

    setCartItems(prev => [...prev, newItem]);
    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId) => {
    setCartItems(prev => prev.filter(i => i.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.cartItemId === cartItemId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = cartSubtotal * 0.0725; // NC sales tax 7.25%
  const cartTotal = cartSubtotal + tax;
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        setIsCartOpen,
        customizingItem,
        setCustomizingItem,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartSubtotal,
        tax,
        cartTotal,
        cartCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
