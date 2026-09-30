import React from 'react';

const facilities = [
    {image: "https://i.ibb.co.com/MxfCcQ2Q/wifi.png", name: "Free wi-Fi"},
    {image: "https://i.ibb.co.com/dwqNsVjs/fainance.png", name: "Financing Available"},
    {image: "https://i.ibb.co.com/v4DLywNK/location.png", name: "Free LocalShuttle"},
    {image: "https://i.ibb.co.com/kVfjFT2d/snak.png", name: "Beverage & Snacks"},
    {image: "https://i.ibb.co.com/fVNpPKdM/weation.png", name: "Waiting Room"},
    {image: "https://i.ibb.co.com/xxQrqfz/tv.png", name: "Tv Screen"},
]
const Facilities = () => {
    return (
        <div className='grid md:grid-cols-3 grid-cols-2 lg:grid-cols-6 py-10 px-4 text-center bg-[#F9F9F9] my-[120px]'>
            {
                facilities.map((card, idx) => <div className='flex flex-col justify-center items-center  border-l-2 border-dashed border-gray-300' key={idx}>
                    <img src={card.image} alt="" />
                    <p className='text-xl font-bold text-black-accent my-6'>{card.name}</p>
                </div>)
            }
        </div>
    );
};

export default Facilities;