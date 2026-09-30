import React from 'react';
import Hero from '../Shared/Hero';
import Partner from '../components/About/Partner';
import Maintenance from '../components/About/Maintenance';
import Rate from '../components/About/Rate';
import Team from '../components/About/Team';
import about from '../assets/images/about3.jpg'

const AboutPage = () => {
    return (
        <div>
            <Hero image={about} title={"Driven by Precision. Powered by Trust."} description={"We’re car enthusiasts dedicated to keeping your vehicle running. With experience, we make car care simple."}></Hero>
            <Partner></Partner>
            <Maintenance></Maintenance>
            <Rate></Rate>
            <Team></Team>
        </div>
    );
};

export default AboutPage;