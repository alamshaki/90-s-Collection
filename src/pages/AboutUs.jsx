import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="h-[40vh] min-h-[300px] bg-gray-900 flex items-center justify-center text-white relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=2000')" }}
        ></div>
        <h1 className="relative z-10 text-4xl md:text-6xl font-extrabold uppercase tracking-tighter">Our Story</h1>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h2 className="text-primary text-xl font-bold uppercase tracking-widest mb-6">Born from Nostalgia</h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10 leading-tight">
          Redefining Men's Fashion with a Nod to the Greatest Decade.
        </h3>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed text-left">
          90's Men Collection was born out of a deep appreciation for the bold, unapologetic style of the 1990s. We saw a gap in modern menswear—a lack of the relaxed fits, durable materials, and distinct aesthetic that defined a generation.
        </p>
        <p className="text-lg text-gray-600 mb-12 leading-relaxed text-left">
          Our mission is simple: to bring back the essence of 90s streetwear while elevating it with modern tailoring and premium fabrics. We're not just creating clothes; we're curating a lifestyle for the modern man who appreciates where culture has been and where it's going.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 text-left">
          <div className="border-l-4 border-primary pl-6">
            <h4 className="text-xl font-bold uppercase text-gray-900 mb-2">Authentic</h4>
            <p className="text-gray-500">Every piece is designed with genuine respect for 90s fashion history.</p>
          </div>
          <div className="border-l-4 border-primary pl-6">
            <h4 className="text-xl font-bold uppercase text-gray-900 mb-2">Quality</h4>
            <p className="text-gray-500">Heavyweight cottons, durable denims, and construction built to last.</p>
          </div>
          <div className="border-l-4 border-primary pl-6">
            <h4 className="text-xl font-bold uppercase text-gray-900 mb-2">Modern Fit</h4>
            <p className="text-gray-500">Classic silhouettes updated for the contemporary male physique.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-100 py-24 text-center">
        <h2 className="text-3xl font-extrabold uppercase mb-8">Ready to upgrade your wardrobe?</h2>
        <Link to="/shop" className="inline-block bg-primary hover:bg-primary-hover text-white px-10 py-4 font-bold uppercase tracking-widest transition-colors shadow-lg">
          Shop The Collection
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
