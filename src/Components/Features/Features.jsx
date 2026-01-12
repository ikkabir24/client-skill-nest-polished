import { FaChalkboardTeacher, FaClock, FaCertificate } from "react-icons/fa";
import { MdDashboardCustomize, MdSupportAgent, MdDevices } from "react-icons/md";
import SectionTitle from "../../shared/SectionTitle";

const features = [
    {
        id: 1,
        icon: <FaChalkboardTeacher />,
        title: "Expert-Led Courses",
        description:
            "Learn from experienced instructors with industry-level knowledge and real-world expertise.",
    },
    {
        id: 2,
        icon: <MdDashboardCustomize />,
        title: "Personal Dashboard",
        description:
            "Track your enrolled courses, progress, and achievements from a centralized dashboard.",
    },
    {
        id: 3,
        icon: <FaClock />,
        title: "Flexible Learning",
        description:
            "Access courses anytime, anywhere with flexible schedules designed for busy learners.",
    },
    {
        id: 4,
        icon: <FaCertificate />,
        title: "Verified Certificates",
        description:
            "Earn certificates upon course completion to showcase your skills professionally.",
    },
    {
        id: 5,
        icon: <MdDevices />,
        title: "Multi-Device Access",
        description:
            "Seamless learning experience across mobile, tablet, and desktop devices.",
    },
    {
        id: 6,
        icon: <MdSupportAgent />,
        title: "Student Support",
        description:
            "Get help when you need it with responsive support and learning assistance.",
    },
];

const Features = () => {
    return (
        <section className="py-16 md:py-20 bg-base-100">
            <div className="container mx-auto px-6 md:px-12">
                <SectionTitle
                    title="Why Choose Our Platform"
                    subtitle="Key Features"
                />

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={feature.id}
                            className="card h-full border border-base-200 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="card-body">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-content text-xl">
                                    {feature.icon}
                                </div>

                                <h3 className="text-lg font-semibold text-base-content">
                                    {feature.title}
                                </h3>

                                <p className="mt-2 text-sm leading-relaxed text-base-content/80">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
