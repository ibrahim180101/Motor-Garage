import React, { useEffect, useState } from 'react';
import Hero from '../Shared/Hero';
import { useParams } from 'react-router';
import axios from 'axios';

const LearnMorePage = () => {
    const { id } = useParams();
    const [service, setService] = useState(null);
    useEffect(() => {
        axios.get('/services.json')
            .then(res => {
                const all = res.data;
                const findService = all.find(item => item.id == id);
                setService(findService);
            });
    }, [id]);

    return (
        <div className='mt-30'>
            <div className='w-11/12 mx-auto py-10'>
                {
                    service ? (
                        <div className='flex flex-col lg:flex-row items-center gap-10'>
                            <img 
                                src={service.image} 
                                alt="" 
                                className='rounded-xl mb-6'
                            />
                            <div>
                                <h2 className='text-3xl font-bold'>{service.title}</h2>
                                <p className='text-lg mt-3'>{service.description}</p>
                                <p className='text-lg my-text mt-3 rancho'>{service.text}</p>
                            </div>
                        </div>
                    ) : (
                        <p className='text-center text-xl'>Loading...</p>
                    )
                }
            </div>

        </div>
    );
};

export default LearnMorePage;
