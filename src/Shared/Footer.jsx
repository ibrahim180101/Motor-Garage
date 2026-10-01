import React from 'react';
import { FaFacebook, FaInstagram, FaLocationDot, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Link } from 'react-router';
import logo from '../assets/images/logo.png';
import { useModal } from '../ModalContext/ModalContext';

const Footer = () => {
  const { openModal } = useModal();
  return (
    <footer className="mx-3 mt-10 rounded-[2rem] bg-slate-950 p-6 text-white md:mx-5 md:p-12 lg:p-16">
      <div className="rounded-3xl bg-gradient-to-r from-red-primary to-red-700 p-7 shadow-2xl md:p-10 lg:flex lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[.2em] text-white/75">Ready when you are</p>
          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">Your Car Deserves the Best Care.</h2>
          <p className="mt-3 max-w-xl text-white/80">Schedule your next service and experience professional auto care with clear communication.</p>
        </div>
        <button onClick={openModal} className="mt-6 rounded-xl bg-white px-6 py-3 font-extrabold text-slate-950 transition hover:-translate-y-1 hover:shadow-xl lg:mt-0">Book Appointment</button>
      </div>
      <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link to="/" className="inline-block"><img className="h-12 w-auto" src={logo} alt="Motor Garage" /></Link>
          <p className="mt-5 max-w-md leading-7 text-slate-400">Your trusted partner for professional auto repair services, quality workmanship, and honest pricing.</p>
          <div className="mt-6 flex gap-3">
            {[FaFacebook, FaInstagram, FaLocationDot].map((Icon, i) => <a key={i} href="#" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:-translate-y-1 hover:bg-red-primary"><Icon /></a>)}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-extrabold">Explore</h3>
          <div className="mt-5 grid gap-3 text-slate-400">
            <Link className="hover:text-white" to="/">Home</Link><Link className="hover:text-white" to="/about">About Us</Link><Link className="hover:text-white" to="/financing">Financing</Link><Link className="hover:text-white" to="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-extrabold">Contact</h3>
          <div className="mt-5 grid gap-4 text-slate-400">
            <p className="flex gap-3"><FaLocationDot className="mt-1 text-red-400" />23 Auto Street, Motor City, MC 12345</p>
            <p className="flex gap-3"><FaPhoneAlt className="mt-1 text-red-400" />(555) 123-4567</p>
            <p className="flex gap-3"><MdOutlineMail className="mt-1 text-red-400" />Info@expertauto.com</p>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-500">© {new Date().getFullYear()} Motor Garage. All rights reserved.</div>
    </footer>
  );
};

export default Footer;