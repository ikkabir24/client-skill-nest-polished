import React from 'react';
import {
    FaGraduationCap,
    FaChalkboardTeacher,
    FaChartLine,
    FaClock,
    FaCertificate,
    FaUsers,
} from 'react-icons/fa';
import SectionTitle from '../../shared/SectionTitle';

const services = [
    {
        title: 'Skill-Based Learning',
        description:
            'Learn practical, in-demand skills designed to meet real-world industry needs.',
        icon: FaGraduationCap,
    },
    {
        title: 'Expert-Led Courses',
        description:
            'High-quality courses created and taught by experienced industry professionals.',
        icon: FaChalkboardTeacher,
    },
    {
        title: 'Career-Focused Roadmaps',
        description:
            'Structured learning paths that guide you from beginner to job-ready.',
        icon: FaChartLine,
    },
    {
        title: 'Flexible Learning',
        description:
            'Access courses anytime, anywhere with lifetime learning flexibility.',
        icon: FaClock,
    },
    {
        title: 'Verified Certification',
        description:
            'Earn certificates that strengthen your resume and professional credibility.',
        icon: FaCertificate,
    },
    {
        title: 'Community & Support',
        description:
            'Connect with mentors and learners for guidance, feedback, and motivation.',
        icon: FaUsers,
    },
];

const ServicesSection = () => {
    return (
        <section className="pb-16 md:pb-20">
            <div className="max-w-7xl mx-auto">
                <div className="container mx-auto px-6 md:px-12">
                    <SectionTitle
                        title="A complete learning ecosystem"
                        subtitle="Our Services"
                    />

                    {/* Services Grid */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => {
                            const Icon = service.icon;

                            return (
                                <div
                                    key={index}
                                    className="card h-full border border-base-200 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg p-6"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 mb-6">
                                        <Icon className="text-2xl text-primary" />
                                    </div>

                                    <h3 className="text-lg font-semibold mb-2">
                                        {service.title}
                                    </h3>

                                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
