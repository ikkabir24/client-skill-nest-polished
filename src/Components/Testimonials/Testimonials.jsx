import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from "../../shared/SectionTitle";

const testimonials = [
    {
        id: 1,
        name: "Tom Cruise",
        role: "Frontend Developer",
        avatar: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRvfaK9kjLritKOxR1mmeQvX9F5qIV1mAzTODWjGKZIT8fPFgdZhxhhkCQbZjRmeGtJM1CB_tYcQjxncWk",
        feedback:
            "The courses are very detailed and practical. I built a real project after completing the Web Development path!",
    },
    {
        id: 2,
        name: "Robert Downey Jr",
        role: "Data Analyst",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNPOCRze3Lc62OUDdRIQ-a3j2nlcQK1nVcvw&s",
        feedback:
            "Flexible learning helped me upskill while working full-time. The instructors are top-notch!",
    },
    {
        id: 3,
        name: "Lionel Messi",
        role: "GOAT",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaliZhIeOJsrF7LPKGaMcL0_T6vEMRxbp2hw&s",
        feedback:
            "Que Miras Bobo..!",
    },
    {
        id: 4,
        name: "Cristiano Ronaldo",
        role: "Semi-GOAT",
        avatar: "https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-of-portugal-during-the-uefa-nations-news-photo-1748359673.pjpeg?crop=0.610xw:0.917xh;0.317xw,0.0829xh&resize=640:*",
        feedback:
            "Muchas gracias afición esto es para vosotros, Siiiiuuuuuu..!",
    },
    {
        id: 5,
        name: "Jennifer Conelly",
        role: "Digital Marketer",
        avatar: "https://i.pinimg.com/736x/14/ad/bf/14adbf7426e08ff76825e6506b956046.jpg",
        feedback:
            "The marketing courses are very practical. I learned strategies that I could apply immediately to real campaigns.",
    },
    {
        id: 6,
        name: "Henry Cavill",
        role: "Fullstack Developer",
        avatar: "https://vz.cnwimg.com/wp-content/uploads/2019/11/Henry-Cavill.jpg?x60356",
        feedback:
            "I loved the learning path. It was structured perfectly and helped me land my dream job as a fullstack developer.",
    },
    {
        id: 7,
        name: "Alexandra Daddario",
        role: "Data Scientist",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuAz94rLb30GlLYrU7BshIsrrzYUyRIaeAog&s",
        feedback:
            "The machine learning courses were excellent. They taught both theory and practical implementations.",
    },
    {
        id: 8,
        name: "Nicole Kidman",
        role: "Mobile App Developer",
        avatar: "https://lh3.googleusercontent.com/proxy/xNTwfrGpjLCkxOFMUZzhhf4cI3zZjBLHrM-5MCfmpT-45jw3d9RiE4PLgzQl_lpJv6QxyhkGgohDic0MxXYnifEzXB443DDTbLLHWptpBjnP7_Qp8CTZ5R2-jZaYLOJrsMgyndJnxKuLYZqd3bcziQUvHjTsFwju9laW4YO_VeiT64Z21wqigiEvSf-HRCGYVed7fsN3wg",
        feedback:
            "The mobile app development courses are top quality. I created my first app within a few weeks of learning here.",
    },
    {
        id: 9,
        name: "Charlize Theron",
        role: "Graphic Designer",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOut7JTSH6gtUZNMDs_gPsu8IxaMqID-Z9WQ&s",
        feedback:
            "The design courses are very creative and detailed. I improved my portfolio and learned industry standards.",
    },
    {
        id: 10,
        name: "Marion Cotillard",
        role: "Cloud Engineer",
        avatar: "https://assets.vogue.com/photos/5891e4f69c1609bf7a72e536/master/pass/marion-cottilard-interview-2014.jpg",
        feedback:
            "The cloud computing courses were highly practical. The labs and projects helped me gain confidence in AWS and Azure.",
    },
];


const Testimonials = () => {
    return (
        <section className="pb-10 md:pb-15">
            <div className="container mx-auto px-6 md:px-12">
                <SectionTitle
                    title="What Our Students Say"
                    subtitle="Testimonials"
                />

                <Swiper
                    loop={true}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1} // default for mobile
                    coverflowEffect={{
                        rotate: 30,
                        stretch: 20,
                        depth: 200,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="card border h-[330px] border-base-200 bg-base-100 shadow-sm p-6 md:px-12 md:py-8 mx-4 text-center flex flex-col items-center">
                                <div className="mb-4">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-primary"
                                        referrerPolicy="no-referrer"
                                    />
                                </div>

                                <p className="text-base-content/80 italic text-sm md:text-base leading-relaxed mb-4">
                                    "{testimonial.feedback}"
                                </p>

                                <h3 className="text-lg font-semibold text-base-content">
                                    {testimonial.name}
                                </h3>
                                <p className="text-sm text-base-content/70">{testimonial.role}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
