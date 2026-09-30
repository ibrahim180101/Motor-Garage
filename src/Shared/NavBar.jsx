import React, { useState } from 'react';
import { useModal } from '../ModalContext/ModalContext';
import logo from '../assets/images/logo.png';
import { Link, NavLink } from 'react-router';
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useModal();


  return (
    <>
      <nav className="text-amber-50 font-bold relative">
        <div className="">
          <div className="flex mr-[7%] md:mr-0 items-center justify-between">
            <Link to='/' className="flex items-center">
              <img className='h-15 object-cover' src={logo} alt="#" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 backdrop-blur-2xl px-8 py-4 rounded-lg">
              <NavLink to="/" className="hover:text-red-400 transition-colors">Home</NavLink>

              <div className="relative group">
                <NavLink to='/financing' className="flex items-center space-x-1 hover:text-red-400 transition-colors">
                  <span>Financing</span>
                </NavLink>
              </div>

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 hover:text-red-400 transition-colors">
                  <span>Services</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                  <div className="bg-white flex flex-col items-center rounded-lg shadow-xl py-2 border border-gray-200">
                    <NavLink to='/mobileMechanic'>
                      <p className="block px-4 py-3 text-black text-lg hover:text-red-600 transition-colors cursor-pointer">Mobile Mechanic</p>
                    </NavLink>
                    <NavLink to='/bodyPaint'>
                      <p className="block px-4 py-3 text-black text-lg hover:text-red-600 transition-colors cursor-pointer">Paint And Body</p>
                    </NavLink>
                    <NavLink to='/shop'>
                      <p className="block px-4 py-3 text-black text-lg hover:text-red-600 transition-colors cursor-pointer">In Shop Repairs</p>
                    </NavLink>
                  </div>
                </div>
              </div>

              {/* About Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 hover:text-red-400 transition-colors">
                  <span>About Us</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                  <div className="bg-white flex flex-col items-center rounded-lg shadow-xl py-2 border border-gray-200">
                    <NavLink to='/about'>
                      <p className="block px-4 py-3 text-black text-lg hover:text-red-600 transition-colors cursor-pointer">About</p>
                    </NavLink>
                    <NavLink to='/directions'>
                      <p className="block px-4 py-3 text-black text-lg hover:text-red-600 transition-colors cursor-pointer">Directions</p>
                    </NavLink>
                    <NavLink to='/special'>
                      <p className="block px-4 py-3 text-black text-lg hover:text-red-600 transition-colors cursor-pointer">Special</p>
                    </NavLink>
                  </div>
                </div>
              </div>

              <NavLink to='/blog' className="hover:text-red-400 transition-colors">Blog</NavLink>
              <NavLink to='/contact' className="hover:text-red-400 transition-colors">Contact</NavLink>
            </div>

            {/* Book Appointment Button */}
            <div className="hidden md:block">
              <button onClick={openModal} className='common-btn'>Book Appointment</button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden -mt-3">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-red-400 cursor-pointer">
                {mobileMenuOpen ?  "" : <FaBars className='text-3xl'/>}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`fixed top-0 right-0 h-full w-64 bg-white z-50 p-6 shadow-xl transform transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button 
            onClick={() => setMobileMenuOpen(false)} 
            className="absolute top-4 right-4 text-xl text-black"
          >
            <MdClose className='text-3xl' />
          </button>

          <ul className="mt-10 space-y-6 text-black font-semibold text-lg">
            <li><NavLink to="/" onClick={() => setMobileMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/financing" onClick={() => setMobileMenuOpen(false)}>Financing</NavLink></li>
            <li><NavLink to="/mobileMechanic" onClick={() => setMobileMenuOpen(false)}>Mobile Mechanic</NavLink></li>
            <li><NavLink to="/bodyPaint" onClick={() => setMobileMenuOpen(false)}>Paint & Body</NavLink></li>
            <li><NavLink to="/shop" onClick={() => setMobileMenuOpen(false)}>In Shop Repairs</NavLink></li>
            <li><NavLink to="/about" onClick={() => setMobileMenuOpen(false)}>About</NavLink></li>
            <li><NavLink to="/directions" onClick={() => setMobileMenuOpen(false)}>Directions</NavLink></li>
            <li><NavLink to="/special" onClick={() => setMobileMenuOpen(false)}>Special</NavLink></li>
            <li><NavLink to="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink></li>
          </ul>

          <button 
            onClick={() => { openModal(); setMobileMenuOpen(false); }}
            className="mt-10 w-full bg-red-600 text-white py-3 rounded-lg font-semibold"
          >
            Book Appointment
          </button>
        </div>
      </nav>
    </>
  );
}
