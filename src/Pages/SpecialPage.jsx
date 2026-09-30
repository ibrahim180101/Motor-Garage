import React from 'react';
import Hero from '../Shared/Hero';
import Title from '../Shared/Title';
import popularBlog from '../assets/images/learnMore.jpg'

const SpecialPage = () => {
    return (
        <div>
            <Hero image={popularBlog} title={" Special Deals, Just for You"} description={"Get exclusive discounts on repairs and maintenance. Our specials help you save while keeping your car in top shape."}></Hero>
            <div className='my-30'>
                <Title description={"From routine check-ups to extensive repairs, find exclusive offers that fit your needs. Book your service today!"} subTitle={"Current Specials & Offers"}></Title>
                <div className='mt-12 px-[3%] lg:mx-[7%] grid lg:grid-cols-3 gap-9'>
                    <div className='p-6 bg-[#F9F9F9] rounded-2xl'>
                        <p className='text-2xl text-red-secondary'>10% Off Labor up to $100</p>
                        <h1 className='text-[32px] font-bold mt-3 text-primary-black'>Military, first responders, seniors, and teachers.</h1>
                        <div className='mt-8 grid grid-cols-2 gap-8'>
                            <button className='py-3 w-full border border-red-secondary rounded-lg cursor-pointer hover:bg-red-secondary hover:text-white duration-500 hover:-translate-y-1'>Print Coupon</button>
                            <button className="text-base py-3 w-full bg-red-secondary text-white rounded-lg cursor-pointer duration-500 hover:-translate-y-1">Redeem Now</button>
                        </div>
                    </div>
                    <div className='p-6 bg-[#F9F9F9] rounded-2xl'>
                        <p className='text-2xl text-red-secondary'>10% Off Labor up to $100</p>
                        <h1 className='text-[32px] font-bold mt-3 text-primary-black'>Military, first responders, seniors, and teachers.</h1>
                        <div className='mt-8 grid grid-cols-2 gap-8'>
                            <button className='py-3 w-full border border-red-secondary rounded-lg cursor-pointer hover:bg-red-secondary hover:text-white duration-500 hover:-translate-y-1'>Print Coupon</button>
                            <button className="text-base py-3 w-full bg-red-secondary text-white rounded-lg cursor-pointer duration-500 hover:-translate-y-1">Redeem Now</button>
                        </div>
                    </div>
                    <div className='p-6 bg-[#F9F9F9] rounded-2xl'>
                        <p className='text-2xl text-red-secondary'>10% Off Labor up to $100</p>
                        <h1 className='text-[32px] font-bold mt-3 text-primary-black'>Military, first responders, seniors, and teachers.</h1>
                        <div className='mt-8 grid grid-cols-2 gap-8'>
                            <button className='py-3 w-full border border-red-secondary rounded-lg cursor-pointer hover:bg-red-secondary hover:text-white duration-500 hover:-translate-y-1'>Print Coupon</button>
                            <button className="text-base py-3 w-full bg-red-secondary text-white rounded-lg cursor-pointer duration-500 hover:-translate-y-1">Redeem Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialPage;