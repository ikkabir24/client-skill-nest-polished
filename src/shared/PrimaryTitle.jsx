import React from 'react';

const PrimaryTitle = ({children, tailClass}) => {
    return (
        <p className={`text-lg sm:text-xl md:text-2xl font-semibold text-base-content leading-tight ${tailClass}`}>
            {children}
        </p>
    );
};

export default PrimaryTitle;