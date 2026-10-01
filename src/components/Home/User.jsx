import React from 'react';
import { FaStar } from 'react-icons/fa';

const User = ({ user }) => {
  const { name, avatar, username, text } = user;
  return (
    <article className="ml-6 w-[350px] rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl">
      <div className="flex items-center gap-3">
        <img className="h-12 w-12 rounded-full object-cover ring-4 ring-red-50" src={avatar} alt={name} />
        <div>
          <h3 className="font-extrabold text-slate-900">{name}</h3>
          <p className="text-sm text-slate-500">{username}</p>
        </div>
        <div className="ml-auto flex gap-0.5 text-xs text-amber-400"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
      </div>
      <p className="mt-5 text-sm leading-7 text-slate-600">“{text}”</p>
    </article>
  );
};

export default User;