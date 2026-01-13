import React from 'react';
import { NavLink } from 'react-router';

const DashMenu = ({icon:Icon, label, to, className}) => {
    return (
        <li className="w-full">
            <NavLink to={to} className={`flex items-center gap-2 rounded-lg px-4 py-3 transition-all w-full text-base-content hover:bg-primary/20 ${className}`}>
                <Icon className="text-xl" />
                {label}
            </NavLink>
        </li>
    );
};

export default DashMenu;