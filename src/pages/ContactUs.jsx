import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="py-12 md:py-24 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-500 text-lg">Have a question? We'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 text-center border-t-4 border-primary shadow-sm">
            <div className="mx-auto w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-full mb-6">
              <Mail size={24} />
            </div>
            <h3 className="font-bold uppercase tracking-wider mb-2">Email</h3>
            <p className="text-gray-600">hello@90smen.com</p>
          </div>
          
          <div className="bg-white p-8 text-center border-t-4 border-primary shadow-sm">
            <div className="mx-auto w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-full mb-6">
              <Phone size={24} />
            </div>
            <h3 className="font-bold uppercase tracking-wider mb-2">Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
          
          <div className="bg-white p-8 text-center border-t-4 border-primary shadow-sm">
            <div className="mx-auto w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-full mb-6">
              <MapPin size={24} />
            </div>
            <h3 className="font-bold uppercase tracking-wider mb-2">Office</h3>
            <p className="text-gray-600">1990 Vintage Ave<br/>New York, NY 10001</p>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold uppercase tracking-wider mb-8 pb-4 border-b-2 border-gray-900">Send a Message</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-300 p-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" required />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full bg-gray-50 border border-gray-300 p-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">Subject</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-300 p-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" required />
            </div>
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">Message</label>
              <textarea rows="5" className="w-full bg-gray-50 border border-gray-300 p-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" required></textarea>
            </div>
            <button type="submit" className="bg-primary hover:bg-primary-hover text-white px-10 py-4 font-bold uppercase tracking-widest transition-colors shadow-md">
              Send Message
            </button>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default ContactUs;
