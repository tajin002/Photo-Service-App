import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Home = () => {
    const item = useLoaderData()
    console.log(item);
    return (
        <div>
            <Banner />
            
        </div>
    );
};

export default Home;