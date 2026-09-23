import React from 'react';
import { Link } from 'react-router-dom';

const MyAccount = () => {
  return (
    <div className="page-wrapper" style={{ padding: '40px 0 80px' }}>
      <div className="container">
        <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '40px' }}>My Account</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '40px' }}>
          <aside style={{ borderRight: '1px solid var(--border-color)', paddingRight: '20px' }}>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li><Link to="#" style={{ fontWeight: 'bold' }}>Dashboard</Link></li>
              <li><Link to="#" style={{ color: 'var(--text-secondary)' }}>Orders</Link></li>
              <li><Link to="#" style={{ color: 'var(--text-secondary)' }}>Addresses</Link></li>
              <li><Link to="#" style={{ color: 'var(--text-secondary)' }}>Account Details</Link></li>
              <li><Link to="/login" style={{ color: 'var(--accent-primary)', marginTop: '20px', display: 'block' }}>Logout</Link></li>
            </ul>
          </aside>
          
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', marginBottom: '20px' }}>Hello, User!</h2>
            <p style={{ marginBottom: '30px', color: 'var(--text-secondary)' }}>
              From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={{ padding: '20px', border: 'var(--bold-border)', backgroundColor: 'var(--bg-secondary)' }}>
                <h3>Recent Orders</h3>
                <p style={{ marginTop: '10px', color: 'var(--text-secondary)' }}>No recent orders.</p>
              </div>
              <div style={{ padding: '20px', border: 'var(--bold-border)', backgroundColor: 'var(--bg-secondary)' }}>
                <h3>Default Address</h3>
                <p style={{ marginTop: '10px', color: 'var(--text-secondary)' }}>You have not set up this type of address yet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
