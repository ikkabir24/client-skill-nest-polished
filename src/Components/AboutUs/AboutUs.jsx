import { FaGraduationCap, FaUsers, FaBullseye } from "react-icons/fa";
import imgBanner from '../../assets/AboutUs_banner.jpeg'
import SectionTitle from "../../shared/SectionTitle";
import PrimaryTitle from "../../shared/PrimaryTitle";

const AboutUs = () => {
    return (
        <section className="bg-base-100 py-6">

            <SectionTitle
                title="Empowering learners with practical skills"
                subtitle="About Us"
            />

            {/* Who We Are */}
            <div className="container mx-auto px-6 md:px-12 py-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
                    <p className="text-gray-500 leading-relaxed">
                        Skills Nest is a modern online learning platform designed to bridge the gap
                        between education and real-world skills. We focus on practical, career-oriented
                        courses that help learners grow with confidence.
                    </p>
                    <p className="text-gray-500 mt-4 leading-relaxed">
                        Our goal is to make high-quality education accessible, affordable, and
                        outcome-driven for everyone.
                    </p>
                </div>

                <div className="bg-base-200 rounded-xl p-8 shadow-md">
                    <img
                        src={imgBanner}
                        alt="About Skills Nest"
                        className="w-full rounded-lg"
                    />
                </div>
            </div>

            {/* Mission, Vision, Values */}
            <div className="container mx-auto px-6 md:px-12 pt-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="bg-base-100 p-6 rounded-xl shadow-sm text-center">
                        <FaBullseye className="text-primary text-3xl mx-auto" />
                        <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                        <p className="text-gray-500 text-sm">
                            To provide skill-based education that leads to real opportunities.
                        </p>
                    </div>

                    <div className="bg-base-100 p-6 rounded-xl shadow-sm text-center">
                        <FaGraduationCap className="text-primary text-3xl mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                        <p className="text-gray-500 text-sm">
                            To become a trusted global platform for practical learning.
                        </p>
                    </div>

                    <div className="bg-base-100 p-6 rounded-xl shadow-sm text-center">
                        <FaUsers className="text-primary text-3xl mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                        <p className="text-gray-500 text-sm">
                            Integrity, accessibility, innovation, and learner success.
                        </p>
                    </div>

                </div>
            </div>

            {/* Why Choose Us */}
            <div className="container mx-auto px-6 md:px-12 py-6">
                
                <PrimaryTitle tailClass={'pb-6 text-center'}>Why Choose Skills Nest</PrimaryTitle>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        "Industry-relevant courses",
                        "Expert instructors",
                        "Flexible learning schedule",
                        "Affordable pricing"
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-base-200 p-6 rounded-lg text-center text-gray-600"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default AboutUs;
