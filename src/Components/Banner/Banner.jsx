import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { useContext } from "react";

import { AuthContext } from "../../provider/AuthProvider";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    title: "Upgrade Your Skills",
    subtitle: "Learn industry-ready skills from expert mentors",
    image: "/banner1.png",
  },
  {
    id: 2,
    title: "Build Your Career",
    subtitle: "Practical learning with real-world projects",
    image: "/banner2.png",
  },
  {
    id: 3,
    title: "Learn Anytime, Anywhere",
    subtitle: "Flexible courses designed for your schedule",
    image: "/banner3.png",
  },
];

const HeroCarousel = () => {
  const { user } = useContext(AuthContext);

  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-[60vh] md:h-[70vh]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Gradient Overlay (KEY PART) */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 dark:from-black/80 dark:via-black/60 dark:to-black/40" />

              {/* Content */}
              <div className="relative z-10 flex h-full items-center">
                <div className="container mx-auto px-6 md:px-12">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-xl rounded-2xl bg-black/30 dark:bg-black/40 backdrop-blur-md p-6 md:p-8 text-white shadow-lg"
                  >
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                      {slide.title}
                    </h1>

                    <p className="mt-4 text-lg text-white/90">
                      {slide.subtitle}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-4">
                      <Link to="/allCourses" className="btn btn-primary">
                        Explore Courses
                      </Link>

                      {!user && (
                        <Link
                          to="/register"
                          className="btn btn-info btn-outline text-white border-white/60 hover:border-info"
                        >
                          Join Now
                        </Link>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Scroll Hint */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white opacity-70 animate-bounce">
                ↓
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroCarousel;