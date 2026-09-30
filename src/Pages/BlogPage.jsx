import React from 'react';
import Hero from '../Shared/Hero';
import BlogTitle from '../components/Blog/BlogTitle';
import Blog from '../components/Blog/Blog';
import PopularBlog from '../components/Blog/PopularBlog';
import blog from '../assets/images/blog.jpg'

const BlogPage = () => {
    return (
        <div>
            <Hero image={blog} title={" Expert Insights & Car Care Tips"}  description={"Learn from our certified mechanics and industry specialists. From everyday maintenance advice to in-depth repair guides — we share the knowledge that keeps your car performing at its best."}></Hero>
            <BlogTitle></BlogTitle>
            <div className='grid lg:grid-cols-3 gap-6 mx-[7%] mt-12 mb-30'>
                <div className='md:col-span-2'>
                    <Blog></Blog>
                </div>
                <div className='col-span-1'>
                    <PopularBlog></PopularBlog>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;