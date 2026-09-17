import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4 shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text text-transparent tracking-wide">
          TechCorp Solutions
        </h1>
        <div className="space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-rose-300 transition">Home</Link>
          <Link to="/about" className="hover:text-rose-300 transition">About Us</Link>
          <Link to="/contact" className="hover:text-rose-300 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
