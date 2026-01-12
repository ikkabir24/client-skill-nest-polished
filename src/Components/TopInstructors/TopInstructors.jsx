import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import SectionTitle from "../../shared/SectionTitle";

const TopInstructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // Initialize AOS
        axios.get("http://localhost:3000/topInstructors").then((axiosData) => {
            setInstructors(axiosData.data);
        });
    }, []);

    return (
        <section className="pb-16 md:pb-20 bg-base-100">
            <div className="container mx-auto px-6 md:px-12">
                {/* Section Title */}
                <SectionTitle title="Meet Our Experts" subtitle="Top Instructors" />

                {/* Instructors Grid */}
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
                    {instructors.map((instructor, index) => (
                        <div
                            key={instructor._id}
                            className="card h-full border border-base-200 bg-base-100 shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden flex flex-col items-center text-center p-6"
                            data-aos="fade-up"                   // AOS animation
                            data-aos-delay={index * 100}         // Stagger effect
                        >
                            {/* Avatar */}
                            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-primary shadow-inner">
                                <img
                                    src={instructor.imageUrl}
                                    alt={instructor.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Name & Expertise */}
                            <h3 className="text-lg font-semibold text-base-content">
                                {instructor.name}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                {instructor.expertise}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopInstructors;
