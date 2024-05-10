import React from 'react';
import Slider from '../components/Slider';
import TabCategories from '../components/TabCategories';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    // const jobs = useLoaderData();
    // console.log(jobs);

    return (
        <div>
            <Slider></Slider>
            <TabCategories></TabCategories>
        </div>
    );
};

export default Home;