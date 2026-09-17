import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-100 min-h-screen font-sans text-slate-800 flex flex-col justify-between">
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <footer className="bg-slate-900 text-slate-400 text-center text-xs py-4 mt-8 border-t border-slate-800">
          © 2026 TechCorp Solutions. All rights reserved. | Built with React Router v6
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
