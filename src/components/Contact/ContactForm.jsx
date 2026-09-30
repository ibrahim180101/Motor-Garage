import React from 'react';
import { MdOutlineMail } from "react-icons/md";
import { PiPhoneCall } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";

const ContactForm = () => {
    const handelSubmit =(e) => {
        e.preventDefault();
    }

    return (
        <div className='grid md:grid-cols-1 gap-12 lg:grid-cols-2'>
            <div>
                <h1 className='text-4xl text-black-accent font-bold'>Get in Touch</h1>
                <p className='text-black-base text-base mt-4'>Have a question, need a quote, or want to schedule a service? Our team is here to assist you — quickly, courteously, and whenever you need us.</p>
                <div className='mt-8 flex flex-col gap-8'>
                    <div className='flex items-center gap-3'>
                        <div className='p-3 cursor-pointer bg-[#E639461A] rounded-lg'>
                            <MdOutlineMail className='text-2xl text-red-secondary'></MdOutlineMail>
                        </div>
                        <p className='text-xl hover:underline cursor-pointer text-black-accent'>nobodipdebnath45@gmail.com</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='p-3 cursor-pointer bg-[#E639461A] rounded-lg'>
                            <PiPhoneCall className='text-2xl text-red-secondary'></PiPhoneCall>
                        </div>
                        <p className='text-xl hover:underline cursor-pointer text-black-accent'>01312203474</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='p-3 cursor-pointer bg-[#E639461A] rounded-lg'>
                            <FaLocationDot className='text-2xl text-red-secondary'></FaLocationDot>
                        </div>
                        <p className='text-xl hover:underline cursor-pointer text-black-accent'>123 Fake Street, New York, NY 10001</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-4xl text-black-accent font-bold text-center md:text-start'>Contact form</h1>
                <form onSubmit={handelSubmit} className='mt-8 flex flex-col gap-6'>
                    <div className='grid md:grid-cols-2 gap-4'>
                        <div className='flex flex-col gap-4'>
                            <label className='text-base text-black'>First Name</label>
                            <input className='py-4 px-4 outline-red-secondary bg-[#F9F9F9] w-full rounded-lg' required type="text" name="name" placeholder='Enter Your First Name'/>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <label className='text-base text-black'>Last Name</label>
                            <input className='py-4 outline-red-secondary  px-4 bg-[#F9F9F9] w-full rounded-lg' required type="text" name="name" placeholder='Enter Your Last Name'/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <label className='text-base text-black'>Email</label>
                        <input className='py-4 outline-red-secondary  px-4 bg-[#F9F9F9] w-full rounded-lg' type="email" required name="email" placeholder='Enter Your Email '/>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <label className='text-base text-black'>Phone Number</label>
                        <input className='py-4 outline-red-secondary  px-4 bg-[#F9F9F9] w-full rounded-lg' type="text" required name="number" placeholder='01* **** **** '/>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <label className='text-base text-black'>Message</label>
                        <textarea cols={5} rows={5} className='py-4 outline-red-secondary  px-4 bg-[#F9F9F9] w-full rounded-lg' type="email" name="message" required placeholder='Enter Your Message'/>
                    </div>
                    <div className='mt-2'>
                        <button type='submit' className='common-btn w-full'>Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;