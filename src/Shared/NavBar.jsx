import React, { useState } from 'react';
import { useModal } from '../ModalContext/ModalContext';
import logo from '../assets/images/logo.png';
import { Link, NavLink } from 'react-router';
import { FaBars, FaChevronDown, FaArrowRight } from "react-icons/fa";
import { MdClose } from "react-icons/md";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useModal();

  const linkClass = ({ isActive }) =>
    `transition-colors ${isActive ? 'text-red-400' : 'text-white/85 hover:text-white'}`;

  return (
    <nav className="absolute left-0 right-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/15 bg-black/35 px-4 py-3 shadow-2xl backdrop-blur-xl md:px-5">
        <Link to="/" className="shrink-0">
          <img className="h-12 w-auto md:h-14" src={logo} alt="Motor Garage" />
        </Link>

        <div className="hidden items-center gap-7 text-sm font-bold md:flex">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/financing" className={linkClass}>Financing</NavLink>

          <div className="group relative">
            <button className="flex items-center gap-2 text-white/85 hover:text-white">Services <FaChevronDown className="text-[10px]" /></button>
            <div className="invisible absolute left-1/2 top-full w-52 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl">
                <NavLink className="block rounded-xl px-4 py-3 text-slate-800 hover:bg-red-50 hover:text-red-600" to="/mobileMechanic">Mobile Mechanic</NavLink>
                <NavLink className="block rounded-xl px-4 py-3 text-slate-800 hover:bg-red-50 hover:text-red-600" to="/bodyPaint">Paint & Body</NavLink>
                <NavLink className="block rounded-xl px-4 py-3 text-slate-800 hover:bg-red-50 hover:text-red-600" to="/shop">In Shop Repairs</NavLink>
              </div>
            </div>
          </div>

          <div className="group relative">
            <button className="flex items-center gap-2 text-white/85 hover:text-white">About <FaChevronDown className="text-[10px]" /></button>
            <div className="invisible absolute left-1/2 top-full w-48 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl">
                <NavLink className="block rounded-xl px-4 py-3 text-slate-800 hover:bg-red-50 hover:text-red-600" to="/about">About Us</NavLink>
                <NavLink className="block rounded-xl px-4 py-3 text-slate-800 hover:bg-red-50 hover:text-red-600" to="/directions">Directions</NavLink>
                <NavLink className="block rounded-xl px-4 py-3 text-slate-800 hover:bg-red-50 hover:text-red-600" to="/special">Special</NavLink>
              </div>
            </div>
          </div>

          <NavLink to="/blog" className={linkClass}>Blog</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>

        <button onClick={openModal} className="common-btn hidden !w-auto gap-2 !px-5 !py-2.5 md:inline-flex">
          Book Appointment <FaArrowRight />
        </button>

        <button onClick={() => setMobileMenuOpen(true)} className="p-2 text-2xl text-white md:hidden"><FaBars /></button>
      </div>

      <div className={`fixed inset-0 z-[60] bg-slate-950/60 backdrop-blur-sm transition-opacity md:hidden ${mobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`} onClick={() => setMobileMenuOpen(false)}>
        <aside onClick={e => e.stopPropagation()} className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white p-7 text-slate-900 shadow-2xl transition-transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between">
            <img className="h-12" src={logo} alt="Motor Garage" />
            <button onClick={() => setMobileMenuOpen(false)}><MdClose className="text-3xl" /></button>
          </div>
          <div className="mt-10 grid gap-2 text-lg font-bold">
            {['/','/financing','/mobileMechanic','/bodyPaint','/shop','/about','/directions','/special','/blog','/contact'].map((path) => (
              <NavLink key={path} to={path} onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-4 py-3 hover:bg-red-50 hover:text-red-600">
                {path === '/' ? 'Home' : path.replace('/', '').replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase())}
              </NavLink>
            ))}
          </div>
          <button onClick={() => { openModal(); setMobileMenuOpen(false); }} className="mt-8 w-full rounded-xl bg-red-primary py-3 font-extrabold text-white">Book Appointment</button>
        </aside>
      </div>
    </nav>
  );
}