import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#1e293b] text-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-lg font-bold tracking-wider">POOJA K</div>

      {/* Desktop Links */}
      <div className="hidden md:flex justify-between gap-8 items-center text-gray-100">
        <Link to="/" className="hover:text-cyan-400">Home</Link>
        <Link to="/about" className="hover:text-cyan-400">About</Link>
        <Link to="/education" className="hover:text-cyan-400">Education</Link>
        <Link to="/projects" className="hover:text-cyan-400">Projects</Link>
        <Link to="/contact" className="hover:text-cyan-400">Contact</Link>
      </div>

      {/* Resume Button */}
      <a
        href="/Pooja_K_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download="Pooja_K_Resume.pdf"
        className="hidden md:inline bg-[#06B6D4] hover:bg-cyan-400 text-white px-4 py-1 rounded-full transition duration-300"
      >
        Resume
      </a>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1e293b] flex flex-col items-center py-4 gap-4 md:hidden">
          <Link to="/" onClick={toggleMenu} className="hover:text-cyan-400">Home</Link>
          <Link to="/about" onClick={toggleMenu} className="hover:text-cyan-400">About</Link>
          <Link to="/education" onClick={toggleMenu} className="hover:text-cyan-400">Education</Link>
          <Link to="/projects" onClick={toggleMenu} className="hover:text-cyan-400">Projects</Link>
          <Link to="/contact" onClick={toggleMenu} className="hover:text-cyan-400">Contact</Link>
          <a
            href="/Pooja_K_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Pooja_K_Resume.pdf"
            className="bg-[#06B6D4] hover:bg-cyan-400 text-white px-4 py-1 rounded-full transition duration-300"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
