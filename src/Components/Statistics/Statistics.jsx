import React from "react";
import { FaUsers, FaBook, FaProjectDiagram, FaStar } from "react-icons/fa";
import SectionTitle from "../../shared/SectionTitle";

const statistics = [
    {
        icon: FaUsers,
        label: "Students Enrolled",
        value: "10,500",
        color: "text-primary",
        bg: "bg-primary/10",
    },
    {
        icon: FaBook,
        label: "Courses Completed",
        value: "1,250",
        color: "text-primary",
        bg: "bg-primary/10",
    },
    {
        icon: FaProjectDiagram,
        label: "Projects Submitted",
        value: "850",
        color: "text-primary",
        bg: "bg-primary/10",
    },
    {
        icon: FaStar,
        label: "Average Rating",
        value: "4.8 / 5",
        color: "text-primary",
        bg: "bg-primary/10",
    },
];

const Statistics = () => {
    return (
        <section className="pb-16 md:pb-20 bg-base-100">
            <div className="container mx-auto px-6 md:px-12">
                <SectionTitle
                    title="Platform Statistics"
                    subtitle="Real-time Achievements"
                />

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
                    {statistics.map((stat, index) => {
                        const Icon = stat.icon;

                        return (
                            <div
                                key={index}
                                className="card h-full border border-base-200 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg p-6 flex flex-col items-center text-center"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div
                                    className={`flex items-center justify-center w-14 h-14 rounded-full mb-4 ${stat.bg}`}
                                >
                                    <Icon className={`text-2xl ${stat.color}`} />
                                </div>

                                <h3 className="text-3xl font-bold text-base-content mb-1">
                                    {stat.value}
                                </h3>

                                <p className="text-sm text-base-content/70">{stat.label}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Statistics;
