import React from 'react';
import Banner from '../Banner/Banner';
import PopularCourses from '../PopularCourses/PopularCourses';
import TopInstructors from '../TopInstructors/TopInstructors';
import Features from '../Features/Features';
import Services from '../Services/Services';
import Categories from '../Categories/Categories';
import Highlights from '../Highlights/Highlights';
import Statistics from '../Statistics/Statistics';
import Testimonials from '../Testimonials/Testimonials';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {
    return (
        <div className='bg-base-400'>
            <Banner />
            <PopularCourses />
            <Features />
            <Services />
            <Categories />
            <Highlights />
            <Statistics />
            <Testimonials />
            <Newsletter />
            <TopInstructors />
        </div>
    );
};

export default Home;