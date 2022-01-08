import React from 'react';
import Products from './Products/Products';
import Header from '../Shared/Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Products></Products>
        </div>
    );
};

export default Home;