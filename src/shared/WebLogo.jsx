import React from 'react';
import { Link } from 'react-router';

const WebLogo = () => {
    return (
        <Link 
        to={'/'}
        className='text-xl lg:text-2xl font-bold' 
        >
            <span className='bg-primary text-white font-bold pl-8 py-2 text-right rounded-l-lg'>Skill</span>
            <span className='border-2 border-primary pr-8 py-1.5 rounded-r-lg'>Nest</span>
        </Link>
    );
};

export default WebLogo;