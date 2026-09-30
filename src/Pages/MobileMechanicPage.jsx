import React from 'react';
import Hero from '../Shared/Hero';
import ServiceDetails from '../components/Service/ServiceDetails';
import Service from '../components/Service/Service';
import mobileMecanik from '../assets/images/1.jpg';

const MobileMechanicPage = () => {
    return (
        <div>
            <Hero title={"Why Choose Our  Mobile Mechanic Service?"} description={"Whether you're at home, work, or stuck on the roadside, our certified mobile mechanics come to you. We offer diagnostics and full repairs on-site, providing fast, reliable, and hassle-free service."} image={mobileMecanik}></Hero>
            <div className='md:mx-[7%] grid md:grid-cols-3 gap-10 my-30'>
                <div className='md:col-span-2'>
                    <Service></Service>
                </div>
                <div className='col-span-1'>
                    <ServiceDetails></ServiceDetails>
                </div>
            </div>
        </div>
    );
};

export default MobileMechanicPage;