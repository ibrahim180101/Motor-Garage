import React from 'react';

const ChoiceCard = ({ choice }) => {
  const { image, title, description } = choice;
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:border-red-200 hover:shadow-2xl">
      <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-red-50 transition group-hover:bg-red-100" />
      <div className="relative">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-2xl text-white shadow-lg transition group-hover:bg-red-primary">
          {image}
        </div>
        <h3 className="mt-8 text-2xl font-extrabold leading-snug text-slate-900">{title}</h3>
        <p className="mt-4 leading-7 text-slate-500">{description}</p>
        <div className="mt-7 h-1 w-12 rounded-full bg-red-primary transition-all group-hover:w-20" />
      </div>
    </article>
  );
};

export default ChoiceCard;