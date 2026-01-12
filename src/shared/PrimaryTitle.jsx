import React from 'react';

const PrimaryTitle = ({children, tailClass}) => {
    return (
        <p className={`text-2xl sm:text-3xl md:text-4xl font-bold text-base-content leading-tight ${tailClass}`}>
            {children}
        </p>
    );
};

export default PrimaryTitle;