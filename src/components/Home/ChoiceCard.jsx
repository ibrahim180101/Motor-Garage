import React from 'react';

const ChoiceCard = ({choice}) => {
    const{image, title, description} = choice;
    return (
        <div className='flex justify-center items-center flex-col px-4 py-8 border border-gray-200 rounded-lg text-primary-black hover:bg-red-secondary hover:text-white duration-500 cursor-pointer hover:-translate-y-1'>
            <p className='p-2.5 text-3xl bg-[#1A1A1A1A] rounded-lg'>{image}</p>
            <h3 className='text-center text-2xl mt-10'>{title}</h3>
            <p className='text-base mt-2 text-center'>{description}</p>
        </div>
    );
};

export default ChoiceCard;