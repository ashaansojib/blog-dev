import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/home/Header';
import Aside from '../components/home/Aside';
import Footer from '../shared/Footer';

const Main = () => {
    return (
        <section className='max-w-screen-xl mx-auto'>
            <Header />
            <div className='grid grid-cols-3 justify-between gap-4 py-4'>
                <div className='col-span-2'>
                    <Outlet />
                </div>
                <Aside />
            </div>
            <Footer />
        </section>
    );
};

export default Main;