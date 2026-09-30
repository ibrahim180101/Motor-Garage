import React from 'react';
import Title from '../../Shared/Title';

const offers = [
    {
        title:"10% Off Labor up to $100",
        description: "Military, first responders, seniors, and teachers."
    },
    {
        title:"10% Off Labor up to $100",
        description: "Military, first responders, seniors, and teachers."
    },
    {
        title:"20% Off Services for New Customers",
        description: "First-time clients receive a special discount."
    },
]

const Offer = () => {
    return (
        <div>
            <Title title={"Our Offer"} description={"Enjoy seasonal discounts and loyalty rewards for affordable car care. Check our deals and save smart."} subTitle={"Save with Exclusive Offers"}></Title>
            <div className='md:px-[7%] px-[3%] grid lg:grid-cols-3 gap-5 mt-12 mb-28'>
                {
                    offers.map((offer, idx) => <div className='md:px-10 p-5 md:py-12 rounded-xl cursor-pointer hover:translate-y-1 duration-500 bg-[#f6f2f2]' key={idx}>
                        <p className='text-xl text-red-secondary'>{offer.title}</p>
                        <p className='text-3xl font-bold text-primary-black mt-8'>{offer.description}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Offer;