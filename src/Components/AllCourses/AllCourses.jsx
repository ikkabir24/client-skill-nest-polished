import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import LoadingPage from '../LoadingPage/LoadingPage';
import SectionTitle from '../../shared/SectionTitle';
import PrimaryTitle from '../../shared/PrimaryTitle';
import { GrNext, GrPrevious } from "react-icons/gr";

const AllCourses = () => {

    const [loading, setLoading] = useState(true);
    const [courses, setCourses] = useState([]);
    const [totalCourses, setTotalCourses] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [sort, setSort] = useState("rating");
    const [order, setOrder] = useState("desc");
    const [searchText, setSearchText] = useState("");
    const limit = 8;


    useEffect(() => {
        axios.get(`http://localhost:3000/courses?limit=${limit}&skip=${currentPage*limit}&sort=${sort}&order=${order}&search=${searchText}`)
            .then(axiosData => {
                setCourses(axiosData.data.courses);
                setTotalCourses(axiosData.data.total);

                const page = Math.ceil(axiosData.data.total / limit);
                setTotalPage(page);

                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching courses:", error);
                setLoading(false);
            });
    }, [currentPage, order, sort, searchText]);

    // const handleCategory = (category) => {
    //     axios.get(`http://localhost:3000/courses?category=${category}`)
    //         .then(axiosData => {
    //             setCourses(axiosData.data);
    //             setLoading(false);
    //         })
    //         .catch(error => {
    //             console.error("Error fetching courses:", error);
    //             setLoading(false);
    //         });
    // }

    const handleSelect = (e) => {
        const sortData = e.target.value;
        setSort(sortData.split("-")[0]);
        setOrder(sortData.split("-")[1]);

    }

    if (loading) {
        return <LoadingPage></LoadingPage>
    }

    return (
        <div className="bg-base-100 pt-6">
            <SectionTitle
                title="Find the Course That Fits Your Goals"
                subtitle="All Courses"
            />

            <div className="container mx-auto px-6 md:px-12">

                <div className="mb-6 flex items-center gap-3 flex-col md:flex-row md:justify-between md:items-center">

                    {/* Found Apps */}
                    <PrimaryTitle>Apps Found - {totalCourses}</PrimaryTitle>

                    {/* Search */}
                    <form onChange={(e) => setSearchText(e.target.value)}>
                        <label className="input max-w-[300px] w-[300px] input-primary">
                            <svg
                                className="h-[1em] opacity-50"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >

                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="search" className="" placeholder="Search Apps" />
                        </label>
                    </form>

                    {/* Filter */}
                    <div className="">
                        <select 
                        onChange={handleSelect}
                        defaultValue="rating-desc"
                        className="select bg-white border border-primary"
                        >
                            <option disabled={true}>
                                Sort by
                            </option>
                            <option value={"rating-desc"}>Ratings : High - Low</option>
                            <option value={"rating-asc"}>Ratings : Low - High</option>
                            <option value={"price-desc"}>Price : High - Low</option>
                            <option value={"price-asc"}>Price : Low - High</option>
                        </select>
                    </div>
                </div>

                <div className='grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                    {
                        courses.map(course => <CourseCard
                            key={course._id}
                            course={course}
                        ></CourseCard>)
                    }
                </div>

                <div className="flex justify-center flex-wrap gap-3 pt-4">
                    {
                        currentPage > 0 && (
                            <button
                            className='btn btn-primary'
                            onClick={()=>setCurrentPage(currentPage-1)}
                            >
                                <GrPrevious/>
                            </button>
                        )
                    }
                    {
                        [...Array(totalPage).keys()].map(i=>(
                            <button
                            onClick={()=>setCurrentPage(i)}
                            className={`btn ${i === currentPage && 'btn-primary'}`}
                            key={i}
                            >
                                {i+1}
                            </button>
                        ))
                    }
                    {
                        currentPage < totalPage - 1 && (
                            <button
                            className='btn btn-primary'
                            onClick={()=>setCurrentPage(currentPage+1)}
                            >
                                <GrNext />
                            </button>
                        )
                    }
                </div>

            </div>

        </div>
    );
};

export default AllCourses;