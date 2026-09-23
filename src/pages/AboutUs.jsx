import React from 'react';

const AboutUs = () => {
  return (
    <div className="page-wrapper" style={{ padding: '40px 0 80px' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 className="section-title">Our Story</h1>
        
        <img 
          src="https://images.unsplash.com/photo-1517840901100-8179e982acb7?auto=format&fit=crop&q=80&w=1200" 
          alt="90s fashion" 
          style={{ width: '100%', height: '400px', objectFit: 'cover', border: 'var(--bold-border)', marginBottom: '40px' }} 
        />
        
        <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
          <p style={{ marginBottom: '20px' }}>
            Born from a nostalgia for the raddest decade, <strong>90's Collection</strong> was founded with one simple mission: to bring authentic, high-quality retro fashion to the modern era.
          </p>
          <p style={{ marginBottom: '20px' }}>
            We believe that the 90s weren't just a time period; they were a feeling. It was the era of grunge, the birth of modern streetwear, and a time when bold colors and oversized silhouettes ruled the streets. We're here to capture that energy and deliver it straight to your wardrobe.
          </p>
          <p>
            Every piece in our collection is carefully curated or crafted to ensure it meets our standards of quality and authenticity. Whether you're looking for that perfect vintage-wash denim jacket or a graphic tee that screams "1995", we've got you covered. Stay fresh, stay fly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
