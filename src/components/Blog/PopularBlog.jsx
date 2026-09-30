import React from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";

const PopularBlog = () => {
    const popularBlog = [
        {
            id: 1,
            title: "Why Regular Oil Changes Are the Heartbeat of Your Engine",
            image: "/src/assets/images/blog.jpg",
            description: "Understanding how what you eat influences your mental health is crucial for being...",
            time: "17 April, 2025"
        },
        {
            id: 2,
            title: "Why Regular Oil Changes Are the Heartbeat of Your Engine",
            image: "/src/assets/images/popularblog.jpg",
            description: "Understanding how what you eat influences your mental health is crucial for being...",
            time: "17 April, 2025"
        },
        {
            id: 3,
            title: "Why Regular Oil Changes Are the Heartbeat of Your Engine",
            image: "/src/assets/images/popularblog1.jpg",
            description: "Understanding how what you eat influences your mental health is crucial for being...",
            time: "17 April, 2025"
        }
    ]
    return (
        <div>
            <h1 className='text-5xl text-black-accent'>Popular Blog</h1>
            <div className='mt-8 flex gap-6 flex-col'>
                {
                    popularBlog.map(blog => <div className='p-6 border border-[#73737333] rounded-3xl' key={blog.id}>
                        <img className='rounded-2xl w-full' src={blog.image} alt="" />
                        <h1 className='text-[#0F1215] text-xl font-bold mt-6'>{blog.title}</h1>
                        <p className='text-lg mt-2 text-[#827979]'>{blog.description}</p>
                        <div className='mt-6 flex items-center justify-between'>
                            <p className='text-xl text-[#7E7E7E]'>{blog.time}</p>
                            <div className='hover:bg-red-secondary hover:text-white cursor-pointer rounded-full p-2.5 duration-500 hover:border-transparent border border-[#000000]'>
                                <MdOutlineArrowOutward className='text-3xl'></MdOutlineArrowOutward>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularBlog;