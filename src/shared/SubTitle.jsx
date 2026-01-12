import React from 'react';

const SubTitle = ({ children, tailClass }) => {
    return (
        <p className={`text-sm font-medium tracking-wide uppercase ${tailClass}`}>
            {children}
        </p>
    );
};

export default SubTitle;