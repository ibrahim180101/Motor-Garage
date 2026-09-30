import React from 'react';
import team1 from '../../assets/images/team1.jpg'
import team2 from '../../assets/images/team2.png'
import team3 from '../../assets/images/team3.jpg'
import team4 from '../../assets/images/team4.jpg'
import team5 from '../../assets/images/team5.jpg'


const Team = () => {
    return (
        <div className='mt-6'>
            <h1 className='md:text-5xl text-4xl font-bold text-center text-black-accent mb-3'>MEET OUT TEAM</h1>
            <p className='text-2xl text-center text-black-base'>Real people, real passion dedicated to keeping you safely on the road.</p>
            <div className='grid lg:grid-cols-3 mx-[3%] md:mx-[7%] gap-6 lg:grid-rows-6 my-12'>
                <div className='col-span-1 lg:row-span-3'>
                    <img className='w-full hover:scale-103 duration-500 h-auto rounded-2xl object-cover' src={team1} alt="Not Found" />
                </div>
                <div className='md:col-span-2 lg:row-span-4'>
                    <img className='h-[650px] hover:scale-103 duration-500  rounded-2xl w-full object-cover' src={team2} alt="Not Found" />
                </div>
                <div className='col-span-1 lg:row-span-3'>
                    <img className='h-full hover:scale-103 duration-500  rounded-2xl w-full object-cover' src={team3} alt="Not Found" />
                </div>
                <div className='col-span-1 lg:row-span-2'>
                    <img className='h-full hover:scale-103 duration-500  rounded-2xl w-full object-cover' src={team4} alt="Not Found" />
                </div>
                <div className='col-span-1 lg:row-span-2'>
                    <img className='h-full hover:scale-103 duration-500  rounded-2xl w-full object-cover' src={team5} alt="Not Found" />
                </div>
            </div>
        </div>
    );
};

export default Team;