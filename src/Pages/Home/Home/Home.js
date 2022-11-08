import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import ServicesItem from '../HomeItem/ServicesItem';

const Home = () => {
    const item = useLoaderData()
    console.log(item);
    return (
        <div>
            <Banner />
            <ServicesItem/>
        </div>
    );
};

export default Home;