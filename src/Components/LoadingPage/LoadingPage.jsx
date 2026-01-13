import React from 'react';

const LoadingPage = ({className}) => {
    return (
        <div className={`flex justify-center items-center ${className}`}>
            <span className="loading loading-spinner loading-lg mt-8"></span>
        </div>
    );
};

export default LoadingPage;