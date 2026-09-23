import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <div className="page-wrapper" style={{ padding: '40px 0 80px' }}>
      <div className="container">
        <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '40px' }}>Checkout</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
          <div className="checkout-form">
            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', borderBottom: '2px solid var(--text-primary)', paddingBottom: '10px', marginBottom: '20px' }}>Shipping Information</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="form-group">
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">Address</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label className="form-label">City</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label className="form-label">Zip Code</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </section>

            <section style={{ marginBottom: '40px' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', borderBottom: '2px solid var(--text-primary)', paddingBottom: '10px', marginBottom: '20px' }}>Payment Details</h2>
              <div style={{ display: 'grid', gap: '20px' }}>
                <div className="form-group">
                  <label className="form-label">Card Number</label>
                  <input type="text" className="form-control" placeholder="0000 0000 0000 0000" />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div className="form-group">
                    <label className="form-label">Expiry Date</label>
                    <input type="text" className="form-control" placeholder="MM/YY" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">CVC</label>
                    <input type="text" className="form-control" placeholder="123" />
                  </div>
                </div>
              </div>
            </section>
            
            <button className="btn btn-primary" style={{ width: '100%', fontSize: '1.2rem', padding: '16px' }}>Place Order</button>
          </div>

          <div className="order-summary" style={{ backgroundColor: 'var(--bg-secondary)', padding: '30px', border: 'var(--bold-border)', height: 'fit-content' }}>
             <h3 style={{ textTransform: 'uppercase', marginBottom: '20px', borderBottom: '2px solid var(--text-primary)', paddingBottom: '10px' }}>In Your Cart</h3>
             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span>Classic Denim Jacket</span>
                <span>$89.99</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span>Chunky Platform Sneakers</span>
                <span>$120.00</span>
              </div>
              <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid var(--border-color)' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.2rem' }}>
                <span>Total</span>
                <span>$219.99</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
