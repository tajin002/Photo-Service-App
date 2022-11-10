import React from 'react';
import Banner from '../Banner/Banner';
import ServicesItem from '../HomeItem/ServicesItem';
import useTitle from '../../../hook/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner />
            <ServicesItem/>
        </div>
    );
};

export default Home;