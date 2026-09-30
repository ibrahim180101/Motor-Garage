import React from 'react';
import { DiVim } from 'react-icons/di';
import { useModal } from '../ModalContext/ModalContext';

const Hero = ({title, description, image, home}) => {
    const {openModal} = useModal();
    return (
        <div className='h-[95vh] md:m-5 mt-4 mx-4  rounded-3xl' style={{background: `linear-gradient(192.93deg, rgba(0, 0, 0, 0) 52.14%, #090909 97.57%), url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>

            {
                home ? <div className=' p-8  max-w-5xl absolute bottom-0'>
                    <h1 className='text-white text-4xl text-center md:text-start md:text-5xl lg:text-7xl font-bold leading-[120%]'>{title}</h1>
                    <p className='lg:text-2xl md:text-xl text-base text-center md:text-start text-[#E9E9E9] my-6'>{description}</p>
                    <div className='flex justify-center md:justify-start'>
                        <button onClick={openModal} className='common-btn'>Book Appointment</button>
                    </div>
                </div> : <div className='flex p-3 md:p-0 h-screen max-w-6xl mx-auto items-center justify-center flex-col'>
                    <h1 className='text-white text-3xl text-center md:text-start md:text-5xl font-bold leading-[120%]'>{title}</h1>
                    <p className='md:text-2xl text-lg text-center text-[#E9E9E9] my-6'>{description}</p>
                </div>
            }
            
        </div>
    );
};

export default Hero;