import React from "react";
import {
    FaUsers,
    FaBook,
    FaProjectDiagram,
    FaChalkboardTeacher,
} from "react-icons/fa";
import SectionTitle from "../../shared/SectionTitle";

const highlights = [
    {
        icon: FaUsers,
        number: "10K+",
        label: "Students Enrolled",
        color: "text-primary",
        bg: "bg-primary/10",
    },
    {
        icon: FaBook,
        number: "150+",
        label: "Courses Available",
        color: "text-primary",
        bg: "bg-primary/10",
    },
    {
        icon: FaProjectDiagram,
        number: "500+",
        label: "Projects Completed",
        color: "text-primary",
        bg: "bg-primary/10",
    },
    {
        icon: FaChalkboardTeacher,
        number: "25+",
        label: "Expert Mentors",
        color: "text-primary",
        bg: "bg-primary/10",
    },
];

const Highlights = () => {
    return (
        <section className="pb-16 md:pb-20">
            <div className="container mx-auto px-6 md:px-12">
                <SectionTitle
                    title="Our Achievements"
                    subtitle="Platform Highlights"
                />

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
                    {highlights.map((highlight, index) => {
                        const Icon = highlight.icon;

                        return (
                            <div
                                key={index}
                                className="card h-full border border-base-200 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg p-6 flex flex-col items-center text-center"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div
                                    className={`flex items-center justify-center w-14 h-14 rounded-full mb-4 ${highlight.bg}`}
                                >
                                    <Icon className={`text-2xl ${highlight.color}`} />
                                </div>

                                <h3 className="text-3xl font-bold text-base-content mb-1">
                                    {highlight.number}
                                </h3>

                                <p className="text-sm text-base-content/70">{highlight.label}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Highlights;
