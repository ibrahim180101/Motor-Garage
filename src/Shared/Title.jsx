import React from 'react';

const Title = ({ title, subTitle, description }) => (
  <div className="mx-auto max-w-7xl px-[5%]">
    {title && (
      <div className="mb-4 flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.22em] text-red-primary">
        <span className="h-2 w-2 rounded-full bg-red-primary shadow-[0_0_0_6px_rgba(230,57,70,.10)]" />
        {title}
      </div>
    )}
    <h2 className="max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-black-accent md:text-5xl lg:text-6xl">
      {subTitle}
    </h2>
    <p className="mt-5 max-w-2xl text-base leading-8 text-slate-500 md:text-lg">
      {description}
    </p>
  </div>
);

export default Title;