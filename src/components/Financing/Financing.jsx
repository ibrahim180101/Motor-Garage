import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router';

const Financing = () => {
    return (
        <div className='mt-30'>
            <h1 className='text-5xl text-center md:text-start font-bold text-black-accent'>Auto Repair Financing</h1>
            <p className='text-black-base mt-4 text-lg'>Unexpected vehicle repairs can be stressful and disruptive. Rather than putting off crucial maintenance, our financing options allow you to spread the cost over manageable monthly payments. We work with you to identify the right solution for your budget — whether you’re dealing with minor service or major repair work.</p>
            <h1 className='text-[32px] font-bold text-black-accent mt-8'>Benefits of Auto Repair Financing</h1>
            <p className='text-lg text-black-base mt-3.5'>With auto repair financing, you can stop stressing about those necessary repairs that might strain your wallet. Instead of shelling out a big chunk of cash all at once, you can break it down into easy monthly payments. This way, your ride stays safe and dependable without emptying your bank account. We’re here to help you find financing options that work for you. Whether it’s a quick plan for minor fixes or a longer deal for bigger services, our team has got your back. With flexible terms and great rates, we aim to make auto repair financing easy for everyone. Bridgestone CFNA Credit Card.</p>
            <p className='text-lg text-black-base my-2'>We partner with trusted financing providers to make your auto service more affordable:</p>
            <div className='mt-2 flex flex-col gap-2'>
                <div className='flex items-center gap-3'>
                    <div className='p-1 bg-red-secondary rounded-full'>
                        <FaArrowLeft className='test-sm text-white'></FaArrowLeft>
                    </div>
                    <p className='text-lg text-black-base'>complete  battery and charging system test</p>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='p-1 bg-red-secondary rounded-full'>
                        <FaArrowLeft className='test-sm text-white'></FaArrowLeft>
                    </div>
                    <p className='text-lg text-black-base'>Electrical draw testing</p>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='p-1 bg-red-secondary rounded-full'>
                        <FaArrowLeft className='test-sm text-white'></FaArrowLeft>
                    </div>
                    <p className='text-lg text-black-base'>Clean battery terminals and cat le connections</p>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='p-1 bg-red-secondary rounded-full'>
                        <FaArrowLeft className='test-sm text-white'></FaArrowLeft>
                    </div>
                    <p className='text-lg text-black-base'>Install rew batter v with aoorooriate specifications</p>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='p-1 bg-red-secondary rounded-full'>
                        <FaArrowLeft className='test-sm text-white'></FaArrowLeft>
                    </div>
                    <p className='text-lg text-black-base'>apply anti-corrosion treatment</p>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='p-1 bg-red-secondary rounded-full'>
                        <FaArrowLeft className='test-sm text-white'></FaArrowLeft>
                    </div>
                    <p className='text-lg text-black-base'>Dispose of old battery properly</p>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='p-1 bg-red-secondary rounded-full'>
                        <FaArrowLeft className='test-sm text-white'></FaArrowLeft>
                    </div>
                    <p className='text-lg text-black-base'>Warranty registration and documentation</p>
                </div>
            </div>
            <h1 className='mt-8 text-[32px] font-bold text-black-accent'>Learn More About Auto Repair Financing</h1>
            <p className='text-lg text-black-base mt-2'>We're all about giving you great automotive services and flexible financing options that fit your needs. Whether you need a quick oil change, some serious repairs, or new tires, our friendly team is here to help you out.</p>
            <p className='text-lg text-black-base mt-2'>When it comes to financing for auto repairs, trust the folks at Rick’s Tire & Auto Service. We're committed to providing awesome service and finding the best financing deals for you. Don’t let repair costs stress you out <Link to='/contact' className='text-xl font-bold underline'>-contact us-</Link> today to find out more about our financing plans and book your service appointment in Irving, TX!</p>
        </div>
    );
};

export default Financing;