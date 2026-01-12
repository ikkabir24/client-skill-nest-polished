import {
    FaCode,
    FaPaintBrush,
    FaChartBar,
    FaMobileAlt,
    FaRobot,
    FaLanguage,
} from "react-icons/fa";
import SectionTitle from "../../shared/SectionTitle";

const categories = [
    {
        title: "Web Development",
        icon: FaCode,
        count: "120+ Courses",
        color: "text-primary",
        bg: "bg-primary/10",
    },
    {
        title: "UI / UX Design",
        icon: FaPaintBrush,
        count: "45+ Courses",
        color: "text-primary",
        bg: "bg-primary/10",
    },
    {
        title: "Data Analytics",
        icon: FaChartBar,
        count: "30+ Courses",
        color: "text-primary",
        bg: "bg-primary/10",
    },
    {
        title: "Mobile App Development",
        icon: FaMobileAlt,
        count: "40+ Courses",
        color: "text-primary",
        bg: "bg-primary/10",
    },
    {
        title: "AI & Machine Learning",
        icon: FaRobot,
        count: "25+ Courses",
        color: "text-primary",
        bg: "bg-primary/10",
    },
    {
        title: "Language Learning",
        icon: FaLanguage,
        count: "20+ Courses",
        color: "text-primary",
        bg: "bg-primary/10",
    },
];

const Categories = () => {
    return (
        <section className="pb-16 md:pb-20 bg-base-100">
            <div className="container mx-auto px-6 md:px-12">
                <SectionTitle
                    title="Explore Categories"
                    subtitle="Browse by Topic"
                />

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {categories.map((category, index) => {
                        const Icon = category.icon;

                        return (
                            <div
                                key={index}
                                className="card h-full border border-base-200 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="card-body flex flex-row items-center gap-4">
                                    <div
                                        className={`flex h-14 w-14 items-center justify-center rounded-lg ${category.bg}`}
                                    >
                                        <Icon
                                            className={`text-2xl ${category.color}`}
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-base-content">
                                            {category.title}
                                        </h3>
                                        <p className="text-sm text-base-content/70">
                                            {category.count}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Categories;
