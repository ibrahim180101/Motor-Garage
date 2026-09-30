import React from 'react';
import Hero from '../Shared/Hero';
import diraction from '../assets/images/garage4.jpg';

const DirectionsPage = () => {
    return (
        <div>
            <Hero title={" Find Your Way to Our Shop"} description={"We’re easy to find and work with. Get directions, view our map, and plan your visit to your trusted repair experts just a short drive away."} image={diraction}></Hero>

            <div className='mx-[7%] my-30'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29893.315847352907!2d90.41018879999999!3d23.7797376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1763892379845!5m2!1sen!2sbd" className='w-full rounded-2xl h-[600px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default DirectionsPage;