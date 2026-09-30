import React from 'react';

const Title = ({title, subTitle, description}) => {
    return (
        <div className='px-[7%]'>
            {
                title && <h1 className='flex items-center gap-3 text-2xl font-bold text-black-accent'><div className='h-2 w-2 bg-primary-black rounded-full'></div>{title}</h1>
            }
            <h2 className='mt-5 font-semibold lg:font-medium text-3xl md:text-5xl text-black-accent mb-3'>{subTitle}</h2>
            <p className='text-lg max-w-lg text-[#4A5565]'>{description}</p>
        </div>
    );
};

export default Title;