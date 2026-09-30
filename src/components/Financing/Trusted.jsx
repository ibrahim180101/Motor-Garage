import React from 'react';
import partner from '../../assets/images/partner.png';
import partner1 from '../../assets/images/partner3.png';
import partner2 from '../../assets/images/patner1.png';
import partner3 from '../../assets/images/partner6.png';
import partner4 from '../../assets/images/partner2.png';

const Trusted = () => {
    return (
        <div className='my-30'>
            <h1 className='md:text-5xl text-3xl text-center md:text-start font-bold text-black-accent'>Trusted Financing Partners</h1>
            <p className='md:text-2xl text-lg text-center md:text-start text-black-base mt-4'>We’ve partnered with top automotive financing providers for quick approvals and flexible terms.</p>
            <div className='my-15 grid md:grid-cols-2 lg:grid-cols-5 gap-6'>
                <div className='flex items-center justify-center bg-[#F8F8F8] rounded-xl'>
                    <img src={partner} alt="" />
                </div>
                <div className='flex items-center justify-center bg-[#F8F8F8] rounded-xl'>
                    <img src={partner1} alt="" />
                </div>
                <div className='flex items-center justify-center bg-[#F8F8F8] rounded-xl'>
                    <img src={partner2} alt="" />
                </div>
                <div className='flex items-center justify-center bg-[#F8F8F8] rounded-xl'>
                    <img src={partner3} alt="" />
                </div>
                <div className='flex items-center justify-center bg-[#F8F8F8] rounded-xl'>
                    <img src={partner4} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Trusted;