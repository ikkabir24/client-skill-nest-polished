import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionTitle from '../../shared/SectionTitle';
import CourseCard from '../AllCourses/CourseCard';


const PopularCourses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        AOS.init({ duration: 1000 });
        axios.get('http://localhost:3000/popular')
            .then(axiosData => {
                setCourses(axiosData.data);
            });
    }, []);


    return (
        <section className="pt-16 md:pt-20 bg-base-100">
            <div>
                <SectionTitle
                    title="Our Trending Courses"
                    subtitle="Popular Courses"
                />

                <div class="container mx-auto px-6 md:px-12">
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">

                        {courses.map((course, i) => <CourseCard
                        key={i}
                        course={course}
                        ></CourseCard>
                        )}


                    </div>
                </div>
            </div>
        </section>

    );
};

export default PopularCourses;