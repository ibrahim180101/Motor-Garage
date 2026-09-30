import React from 'react';
import Hero from '../Shared/Hero';
import ContactForm from '../components/Contact/ContactForm';
import falback from '../assets/images/popularblog1.jpg'

const ContactPage = () => {
    return (
        <div>
            <Hero title={"Get in Touch With Us"} description={"Have a question or need a repair? We’re here to help give us a call, drop a message, or visit our shop anytime."} image={falback} ></Hero>
            <div className='mx-[7%] my-30'>
                <ContactForm></ContactForm>
            </div>
        </div>
    );
};

export default ContactPage;