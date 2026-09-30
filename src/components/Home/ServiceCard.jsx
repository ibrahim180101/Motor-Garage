import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router';

const ServiceCard = ({service}) => {
    const{id,image, svg, title, description} = service;
    return (
        <div className='md:p-6 p-3 border hover:-translate-y-1 duration-500  border-gray-200 rounded-2xl'>
            <img className='w-full h-[325px] rounded-xl object-cover' src={image} alt={title} />
            <img className='my-5 p-2.5 h-12 w-12 bg-[#1A1A1A1A] rounded-lg' src={svg} alt="not found" />
            <div className='h-[1px] bg-gray-300'></div>
            <div className='mt-5 flex justify-between items-end'>
                <div className='max-w-[250px]'>
                    <h3 className='text-xl font-bold text-[#0D0D0D mb-2]'>{title}</h3>
                    <p className='text-base text-[#595959]'>{description}</p>
                </div>
                <Link to={`/learnMore/${id}`} className='flex items-center gap-2'>
                    <span className='text-sm text-black-accent'>Learn More</span>
                    <FaArrowRight></FaArrowRight>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;