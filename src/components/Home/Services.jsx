import React, { useEffect, useState } from 'react';
import Title from '../../Shared/Title';
import axios from 'axios';
import ServiceCard from './ServiceCard';
import { Collapse } from "react-collapse";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


const Services = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('services.json')
        .then(res => setServices(res.data))
    },[])
    const firstServicer = services.slice(0, 3);
    const secondServices = services.slice(3, 9);

    return (
        <div className='mb-28'>
            <div className='lg:px-[7%] px-[3%]'>
                <div className='flex items-center gap-3'>
                    <div className='h-2.5 w-2.5 bg-primary-black rounded-full'></div>
                    <p className='text-2xl font-bold text-primary-black'>Our Services</p>
                </div>
                <div className='flex items-center gap-3 my-5'>
                    <p className='md:text-5xl text-3xl text-black-accent'>All Services</p>
                    {
                        isOpen ? <IoIosArrowUp  onClick={() => setIsOpen(!isOpen)} className='text-4xl cursor-pointer'></IoIosArrowUp> : <IoIosArrowDown  onClick={() => setIsOpen(!isOpen)} className='text-4xl cursor-pointer'></IoIosArrowDown>
                    }
                    
                </div>
                <p className='text-lg text-[#4A5565]'>From routine maintenance to complex repairs, we've got you covered with expert <br /> service and transparent pricing.</p>
            </div>
            <div className='grid lg:grid-cols-3 gap-5 mt-12 px-[3%] md:px-[7%]'>
                {
                    firstServicer.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
            <Collapse isOpened={isOpen}>
                <div className='grid lg:grid-cols-3 gap-5 mt-5 px-[3%] md:px-[7%]'>
                {
                    secondServices.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
            </Collapse>
        </div>
    );
};

export default Services;