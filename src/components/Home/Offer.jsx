import React from 'react';
import { FaTag, FaArrowRight } from 'react-icons/fa';
import Title from '../../Shared/Title';

const offers = [
  { title: "10% Off Labor up to $100", description: "Military, first responders, seniors, and teachers." },
  { title: "10% Off Labor up to $100", description: "Military, first responders, seniors, and teachers." },
  { title: "20% Off Services for New Customers", description: "First-time clients receive a special discount." },
];

const Offer = () => (
  <section className="bg-slate-950 py-20 text-white">
    <Title title="Our Offers" subTitle="Save More on Your Next Visit" description="Simple, transparent offers designed to make quality vehicle care easier on your wallet." />
    <div className="mx-auto mt-12 grid max-w-7xl gap-5 px-[5%] lg:grid-cols-3">
      {offers.map((offer, idx) => (
        <article key={idx} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[.06] p-7 backdrop-blur transition duration-500 hover:-translate-y-2 hover:border-red-400/40">
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-red-primary/20 blur-2xl" />
          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-primary text-white"><FaTag /></div>
            <p className="mt-7 text-xl font-extrabold text-white">{offer.title}</p>
            <p className="mt-3 text-base leading-7 text-slate-300">{offer.description}</p>
            <div className="mt-7 flex items-center gap-2 text-sm font-bold text-red-400">Claim offer <FaArrowRight /></div>
          </div>
        </article>
      ))}
    </div>
  </section>
); 

export default Offer;