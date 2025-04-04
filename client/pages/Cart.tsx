// pages/Cart.tsx

import React, { useState, useEffect } from 'react';
import { Book } from '../types';  // Assuming you have a Book type defined

interface CartItem extends Book {
  quantity: number;
}

const Cart: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    // Fetch cart data from localStorage or backend API
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const updateQuantity = (bookId: string, quantity: number) => {
    setCart(prevCart => {
      const updatedCart = prevCart.map(item => 
        item.id === bookId ? { ...item, quantity } : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const handleRemove = (bookId: string) => {
    setCart(prevCart => {
      const updatedCart = prevCart.filter(item => item.id !== bookId);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.imageUrl} alt={item.title} />
            <div className="item-info">
              <h3>{item.title}</h3>
              <p>Author: {item.author}</p>
              <p>Price: ${item.price}</p>
              <div className="quantity">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
            </div>
            <div className="remove-btn" onClick={() => handleRemove(item.id)}>
              Remove
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};
export default Cart;
