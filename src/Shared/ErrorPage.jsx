import React from 'react';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className='h-screen flex justify-center items-center relative'>
            <img src="https://i.ibb.co.com/d41VGC64/download.png" alt="" />
            <div className='absolute top-20 left-20'>
                <button onClick={() => navigate(-1)} className='common-btn'>Go Back</button>
            </div>
        </div>
    );
};

export default ErrorPage;