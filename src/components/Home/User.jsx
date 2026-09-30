import React from 'react';

const User = ({user}) => {
    const{name, avatar, username, text} = user
    return (
        <div className='p-6 w-[350px] h-[200px] ml-6 rounded-2xl hover:scale-105 duration-500 border cursor-pointer border-gray-200'>
            <div className='flex items-center gap-3'>
                <img className='h-12 w-12 rounded-full object-cover' src={avatar} alt="not found" />
                <div>
                    <h3 className='text-black text-base font-bold'>{name}</h3>
                    <p className='text-sm text-black'>{username}</p>
                </div>
            </div>
            <p className='text-base text-[#495057] mt-4'>{text}</p>
        </div>
    );
};

export default User;