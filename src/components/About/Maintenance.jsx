import React from 'react';
import maintenance from '../../assets/images/Maintenance.jpg'
import { useModal } from '../../ModalContext/ModalContext';

const Maintenance = () => {
    const {openModal} = useModal();
    return (
        <div className='grid md:grid-cols-2 gap-20 items-center mx-[5%] mb-[120px]'>
            <div>
                <img className='w-full object-cover rounded-xl' src={maintenance} alt="" />
            </div>
            <div>
                <h1 className='md:text-5xl text-4xl text-center md:text-start font-bold text-black-accent leading-[120%]'>Your Trusted Partner in Vehicle Care & Maintenance</h1>
                <div className='flex mt-8 items-center gap-6'>
                    <div className='h-[100px] w-2.5 rounded-xl bg-[#172748]'></div>
                    <div>
                        <h4 className='text-xl text-[#0D0D0D]'>Our Mission</h4>
                        <p className='text-base text-[#6F6F6F] mt-2'>Since day one, we’ve set out to deliver auto service that’s honest, transparent, and centered around you — the driver. Our certified technicians and customer-first approach ensure your vehicle is in safe hands, every time</p>
                    </div>
                </div>
                <div className='mt-6'>
                    <div className='flex items-center gap-6'>
                        <div className='h-10 w-1 bg-[#F2F2F2] rounded-xl'></div>
                        <p className='text-xl text-[#9C9C9C]'>Locally owned & operated</p>
                    </div>
                    <div className='flex items-center gap-6 mt-3'>
                        <div className='h-10 w-1 bg-[#F2F2F2] rounded-xl'></div>
                        <p className='text-xl text-[#9C9C9C]'>10,000+ vehicles serviced</p>
                    </div>
                    <div className='flex items-center gap-6 mt-3'>
                        <div className='h-10 w-1 bg-[#F2F2F2] rounded-xl'></div>
                        <p className='text-xl text-[#9C9C9C]'>ASE-certified professionals</p>
                    </div>
                </div>
                <div className='flex justify-center md:justify-start'>
                    <button onClick={openModal} className='common-btn mt-10'> Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Maintenance;