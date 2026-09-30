import React from 'react';
import { PiArrowBendUpRightBold } from "react-icons/pi";

const BodyServices = () => {

    const bodyPaints = [
        {id: 1, text: "Full-body repainting and touch-ups "},
        {id: 2, text: "Scratch, dent, and scuff mark removal"},
        {id: 3, text: "Collision and frame damage repair"},
        {id: 4, text: "Paint color matching and blending"},
        {id: 5, text: "Panel replacement and body alignment"},
        {id: 6, text: "Sanding, priming, and clear coat finishing"},
        {id: 7, text: "Buffing and polishing for showroom shine"},
        {id: 8, text: "Premium-grade clear coat for long-lasting gloss"},
        {id: 9, text: "Ceramic paint protection for durability"},
        {id: 10, text: "Custom detailing and finishing packages"},
        {id: 11, text: "Paint correction for swirl-free finish"}
    ];

    const firstPaint = bodyPaints.slice(0, 7);
    const secondPaint = bodyPaints.slice(7, 11);
    return (
        <div className='md:p-10 p-4 rounded-2xl bg-[#1A1A1A08]'>
            <h1 className='text-5xl text-black-accent font-bold'>Paint & Body Service  </h1>
            <p className='text-xl text-black-base mt-4.5'>From small scratches to major collision damage, our expert technicians restore your car’s body and paintwork to perfection. We use advanced color-matching technology and high-quality materials to make your vehicle look brand new again.</p>
            <div className='mt-8'>
                <h1 className='text-[32px] font-bold text-black-accent'>What We Offer?</h1>
                <div className='flex mt-4.5 gap-3 flex-col'>
                    {
                        firstPaint.map(paint => <div className='flex items-center gap-2' key={paint.id}>
                            <PiArrowBendUpRightBold className='text-xl text-black-base'></PiArrowBendUpRightBold>
                            <p className='text-black-base text-xl'>{paint.text}</p>
                        </div>)
                    }
                </div>
            </div>
            <div className='mt-8'>
                <h1 className='text-[32px] font-bold text-black-accent'>Performance Enhancements </h1>
                <div className='flex mt-4.5 gap-3 flex-col'>
                    {
                        secondPaint.map(paint => <div className='flex items-center gap-2' key={paint.id}>
                            <PiArrowBendUpRightBold className='text-xl text-black-base'></PiArrowBendUpRightBold>
                            <p className='text-black-base text-xl'>{paint.text}</p>
                        </div>)
                    }
                </div>
            </div>
            <div className='mt-8'>
                <h1 className='text-[32px] font-bold text-black-accent'>Why This Service is Important</h1>
                <p className='text-xl text-black-base mt-4.5'>Your car’s exterior isn’t just about looks — it’s your vehicle’s first line of defense against rust, corrosion, and weather damage. Timely paint and body repairs protect your car’s structure, maintain its resale value, and keep it looking sharp for years. A well-maintained body not only turns heads but also ensures your car stays strong inside and out.</p>
            </div>
        </div>
    );
};

export default BodyServices;