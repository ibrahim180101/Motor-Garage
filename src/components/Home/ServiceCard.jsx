import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router';

const ServiceCard = ({ service }) => {
  const { id, image, svg, title, description } = service;
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl md:p-4">
      <div className="relative overflow-hidden rounded-2xl">
        <img className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[330px]" src={image} alt={title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition group-hover:opacity-100" />
      </div>
      <div className="p-3 md:p-4">
        <img className="my-5 h-12 w-12 rounded-2xl bg-red-50 p-2.5" src={svg} alt="" />
        <div className="mb-5 h-px bg-slate-100" />
        <div className="flex items-end justify-between gap-4">
          <div className="max-w-[70%]">
            <h3 className="mb-2 text-xl font-extrabold text-slate-900">{title}</h3>
            <p className="text-sm leading-6 text-slate-500">{description}</p>
          </div>
          <Link to={`/learnMore/${id}`} className="group/link flex shrink-0 items-center gap-2 rounded-full bg-slate-950 px-4 py-3 text-xs font-bold text-white transition hover:bg-red-primary">
            More <FaArrowRight className="transition group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;