import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-stone-900 text-white p-4 shadow-sm">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold text-amber-400 tracking-wide">TechCorp Solutions</h1>
        <div className="space-x-5 text-sm font-medium">
          <Link to="/" className="hover:text-amber-300 transition">Home</Link>
          <Link to="/about" className="hover:text-amber-300 transition">About Us</Link>
          <Link to="/contact" className="hover:text-amber-300 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
