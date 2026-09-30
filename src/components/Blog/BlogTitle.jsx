import React from 'react';
import { FaRegUser } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const BlogTitle = () => {
    return (
        <div className='mx-[7%] mt-30'>
            <h2 className='text-lg text-[#0F1215]'><span className='text-[#718096]'>blog / </span>Why Regular Oil Changes Are the Heartbeat of Your Engine</h2>
            <h1 className='text-[40px] text-center md:text-start font-bold text-black-accent mt-7'>Why Regular Oil Changes Are the Heartbeat of Your Engine</h1>
            <p className='text-lg text-center md:text-start text-black-base mt-3'>Getting a grip on how your diet affects your mental health is super important for feeling your best. What you munch on can really <br /> change your mood and energy levels, so it's worth paying attention to!</p>
            <div className='flex flex-col md:flex-row items-center justify-between mt-7'>
                <div className='flex items-center gap-3'>
                    <FaRegUser className='text-[#B3B3B3] text-xl'></FaRegUser>
                    <p className='text-base text-[#4D4D4D]'>By Admin</p>
                </div>
                <div className='flex items-center mt-5 md:mt-0 gap-4.5'>
                    <div className='p-3 cursor-pointer bg-[#E639461A] rounded-lg'>
                        <FaFacebook className='text-2xl text-red-secondary'></FaFacebook>
                    </div>
                    <div className='p-3 cursor-pointer bg-[#E639461A] rounded-lg'>
                        <FaLinkedin className='text-2xl text-red-secondary'></FaLinkedin>
                    </div>
                    <div className='p-3 cursor-pointer bg-[#E639461A] rounded-lg'>
                        <FaInstagram className='text-2xl text-red-secondary'></FaInstagram>
                    </div>
                    <div className='p-3 cursor-pointer bg-[#E639461A] rounded-lg'>
                        <FaLink className='text-2xl text-red-secondary'></FaLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogTitle;