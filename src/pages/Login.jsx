import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="page-wrapper" style={{ padding: '80px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: '400px', padding: '40px', border: 'var(--bold-border)', backgroundColor: 'var(--bg-secondary)' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', textAlign: 'center', marginBottom: '30px', textTransform: 'uppercase' }}>Login</h1>
        
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" required />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" required />
          </div>
          
          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '20px' }}>Sign In</button>
        </form>
        
        <p style={{ textAlign: 'center', marginTop: '20px', color: 'var(--text-secondary)' }}>
          Don't have an account? <Link to="/register" style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
