import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const CourseCard = ({ course }) => {
    return (
        <div className="relative card bg-base-200 shadow-md hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden flex flex-col h-full">

            {/* Featured Badge (absolute top-right) */}
            {course.isfeatured && (
                <span className="absolute top-3 right-3 z-10 badge badge-primary">
                    Featured
                </span>
            )}

            {/* Course Image */}
            <figure className="h-48 w-full overflow-hidden">
                <img
                    src={course.imageUrl}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
            </figure>

            {/* Card Body */}
            <div className="card-body flex flex-col flex-1 p-4">

                {/* Title (fixed height) */}
                <h2 className="card-title text-lg font-semibold line-clamp-2 min-h-[3rem]">
                    {course.title || 'Untitled Course'}
                </h2>

                {/* Description (fixed height) */}
                <p className="text-sm text-gray-500 mt-1 line-clamp-3 min-h-[3.75rem]">
                    {course.description || 'No description available.'}
                </p>

                {/* Meta Info Wrapper (fixed block) */}
                <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1 text-sm text-gray-600 min-h-[3.5rem]">

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-400" />
                        <span>{course.rating ? `${course.rating}/5` : '—'}</span>
                    </div>

                    {/* Price */}
                    <div className="text-right font-semibold">
                        {course.price ? `Tk. ${course.price}` : '—'}
                    </div>

                    {/* Duration */}
                    <div>
                        {course.courseDuration || '—'}
                    </div>

                    {/* Category */}
                    <div className="text-right line-clamp-2">
                        {course.category_title || '—'}
                    </div>
                </div>

                {/* CTA (always bottom-aligned) */}
                <div className="mt-auto flex justify-end pt-4">
                    <Link
                        to={`/courseDetails/${course._id}`}
                        className="btn btn-primary btn-sm"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;