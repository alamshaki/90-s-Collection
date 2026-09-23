import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import { products } from '../data/products';

const Cart = () => {
  // Mock cart items
  const cartItems = [
    { ...products[0], quantity: 1, size: 'M' },
    { ...products[3], quantity: 1, size: '9' }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <div className="page-wrapper" style={{ padding: '40px 0 80px' }}>
      <div className="container">
        <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '40px' }}>Your Cart</h1>
        
        {cartItems.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div key={index} style={{ display: 'flex', gap: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '20px', marginBottom: '20px' }}>
                  <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover', border: 'var(--bold-border)' }} />
                  <div style={{ flexGrow: 1 }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '4px' }}>{item.name}</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>Size: {item.size}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div className="quantity-selector" style={{ height: '30px', width: '100px', marginTop: '0' }}>
                        <button style={{ width: '30px' }}>-</button>
                        <input type="number" value={item.quantity} readOnly style={{ height: '100%' }} />
                        <button style={{ width: '30px' }}>+</button>
                      </div>
                      <button style={{ color: 'var(--accent-primary)', display: 'flex', alignItems: 'center' }}>
                        <Trash2 size={16} /> Remove
                      </button>
                    </div>
                  </div>
                  <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary" style={{ backgroundColor: 'var(--bg-secondary)', padding: '30px', border: 'var(--bold-border)', height: 'fit-content' }}>
              <h3 style={{ textTransform: 'uppercase', marginBottom: '20px', borderBottom: '2px solid var(--text-primary)', paddingBottom: '10px' }}>Order Summary</h3>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.2rem', borderTop: '1px solid var(--border-color)', paddingTop: '20px', margin: '20px 0' }}>
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <Link to="/checkout" className="btn btn-primary" style={{ width: '100%' }}>Proceed to Checkout</Link>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <h2>Your cart is empty.</h2>
            <p style={{ margin: '20px 0' }}>Looks like you haven't added anything to your cart yet.</p>
            <Link to="/shop" className="btn btn-primary">Start Shopping</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
