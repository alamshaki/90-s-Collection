import React from 'react';

const ContactUs = () => {
  return (
    <div className="page-wrapper" style={{ padding: '40px 0 80px' }}>
      <div className="container">
        <h1 className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>Contact Us</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', maxWidth: '1000px', margin: '0 auto' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', marginBottom: '20px' }}>Get in Touch</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
              Have a question about an order, our products, or just want to say hi? Drop us a line and we'll get back to you as soon as possible.
            </p>
            
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Email</h3>
              <p style={{ color: 'var(--text-secondary)' }}>support@90scollection.com</p>
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Phone</h3>
              <p style={{ color: 'var(--text-secondary)' }}>+1 (555) 123-4567</p>
            </div>
            
            <div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Address</h3>
              <p style={{ color: 'var(--text-secondary)' }}>1995 Retro Blvd, Suite 90<br/>Los Angeles, CA 90001</p>
            </div>
          </div>
          
          <div style={{ padding: '40px', border: 'var(--bold-border)', backgroundColor: 'var(--bg-secondary)' }}>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" required />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="5" required style={{ resize: 'vertical' }}></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
