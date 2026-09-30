import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Shared/Footer';
import NavBar from '../Shared/NavBar';

const Root = () => {
    return (
        <div>
            <div className='absolute  left-0 top-10 px-[4%] right-0'>
                <NavBar></NavBar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;