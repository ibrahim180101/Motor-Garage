import React from 'react';
import { PiArrowBendUpRightBold } from "react-icons/pi";

const Service = () => {
    const services = [
        {id:1, text: "On-site vehicle inspection and issue diagnosis"},
        {id:2, text: "Engine, brake, or electrical system assessments using portable diagnostic tools"},
        {id: 3, text: "Minor repairs and part replacements performed at your site"},
        {id: 4, text: "Battery jump-start or replacement if required"},
        {id: 5, text: "Tire inflation, puncture fix, or roadside assistance"},
        {id: 6, text: "Professional safety check before completion"},
        {id: 7, text: "Transparent cost estimate and digital invoice provided on-site"},

        {id: 8, text: "On-site vehicle diagnostics and quick repairs"},
        {id: 9, text: "Routine maintenance — oil change, filter, and fluid checks"},
        {id: 10, text: "Battery jump-start, replacement, and electrical testing"},
        {id: 11, text: "Brake inspection and minor repair services"},
        {id: 12, text: "Tire change, flat repair, and pressure adjustment"},
        {id: 13, text: "Engine and cooling system troubleshooting"},
        {id: 14, text: "AC and heating system inspection"},

        {id: 15, text: "Engine performance tuning and optimization"},
        {id: 16, text: "Air intake and exhaust system upgrades"},
        {id: 17, text: "ECU (Engine Control Unit) remapping for improved power and torque"},
        {id: 18, text: "Suspension and handling adjustments for smoother control"},
        {id: 19, text: "Brake system upgrades for better stopping performance"},
        {id: 20, text: "High-performance oil and filter replacements"},
        {id: 21, text: "Tire and wheel balancing for enhanced stability"}
    ]
    const firstServices = services.slice(0, 7);
    const secondServices = services.slice(7, 13);
    const lastServices = services.slice(14, 21);

    return (
        <div className='p-10 bg-[#1A1A1A08] rounded-2xl'>
            <p className='md:text-5xl text-3xl text-center md:text-start text-black-accent font-bold'>Mobile Mechanic Service  </p>
            <p className='text-xl text-center md:text-start text-black-base mt-4.5'>We know your time is valuable. That’s why we’ve made car repair easy and convenient. Our mobile mechanics are experienced, insured, and deliver trustworthy, clear, and top-notch service right at your location.</p>
            <div className='mt-8'>
                <h2 className='text-3xl text-black-accent font-bold'>What’s Included in Our Service</h2>
                <div className='flex flex-col gap-3 mt-4.5'>
                    {
                        firstServices.map(service => <div className='flex items-center gap-2' key={service.id}>
                            <PiArrowBendUpRightBold className='text-black-base text-xl'></PiArrowBendUpRightBold>
                            <p className='text-xl text-black-base'>{service.text}</p>
                        </div>)
                    }
                </div>
            </div>
            <div className='mt-8'>
                <h2 className='text-3xl text-black-accent font-bold'>What’s Included in Our Service</h2>
                <div className='flex flex-col gap-3 mt-4.5'>
                    {
                        secondServices.map(service => <div className='flex items-center gap-2' key={service.id}>
                            <PiArrowBendUpRightBold className='text-black-base text-xl'></PiArrowBendUpRightBold>
                            <p className='text-xl text-black-base'>{service.text}</p>
                        </div>)
                    }
                </div>
            </div>
            <div className='mt-8'>
                <h2 className='text-3xl text-black-accent font-bold'>What’s Included in Our Service</h2>
                <div className='flex flex-col gap-3 mt-4.5'>
                    {
                        lastServices.map(service => <div className='flex items-center gap-2' key={service.id}>
                            <PiArrowBendUpRightBold className='text-black-base text-xl'></PiArrowBendUpRightBold>
                            <p className='text-xl text-black-base'>{service.text}</p>
                        </div>)
                    }
                </div>
            </div>
            <div className='mt-8'>
                <h1 className='text-3xl font-bold text-black-accent'>Why This Service is Important</h1>
                <p className='text-xl text-black-base mt-4.5'>Avoid towing delays and workshop queues our mobile mechanics bring expert care straight to your location, saving you time and stress.</p>
            </div>
        </div>
    );
};

export default Service;