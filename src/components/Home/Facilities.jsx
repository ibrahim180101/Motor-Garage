import React from 'react';
import { FaWifi, FaCar, FaCoffee, FaTv, FaCouch } from 'react-icons/fa';
import { MdPayments } from 'react-icons/md';

const facilities = [
  { icon: <FaWifi />, name: "Free Wi-Fi" },
  { icon: <MdPayments />, name: "Financing Available" },
  { icon: <FaCar />, name: "Free Local Shuttle" },
  { icon: <FaCoffee />, name: "Beverages & Snacks" },
  { icon: <FaCouch />, name: "Comfortable Waiting Room" },
  { icon: <FaTv />, name: "TV Screen" },
];

const Facilities = () => (
  <section className="relative z-20 mx-auto -mt-8 max-w-7xl px-4 md:-mt-12">
    <div className="grid overflow-hidden rounded-3xl border border-white/70 bg-white/95 shadow-2xl backdrop-blur md:grid-cols-3 lg:grid-cols-6">
      {facilities.map((item, idx) => (
        <div
          key={idx}
          className="group flex items-center gap-4 border-b border-slate-100 p-5 transition hover:bg-red-50 lg:flex-col lg:justify-center lg:border-b-0 lg:border-r"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-xl text-red-primary transition group-hover:scale-110 group-hover:bg-red-primary group-hover:text-white">
            {item.icon}
          </span>
          <p className="text-sm font-bold text-slate-700 lg:text-center">{item.name}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Facilities;