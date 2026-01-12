import React, { use } from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Dashboard = () => {

    const { user } = use(AuthContext);

    return (
        <div className='p-3'>
            <div className='flex justify-between'>
                <div className='flex flex-col md:flex-row gap-2'>
                    {
                        user && <NavLink className={'btn btn-outline btn-light justify-start text-start'} to={'/dashboard/myCreations'}>My Courses</NavLink>
                    }
                    {
                        user && <NavLink className={'btn btn-outline btn-light justify-start text-start'} to={'/dashboard/MyEnrolements'}>My Enrolements</NavLink>
                    }
                </div>
                {
                    user && <NavLink className={'btn btn-primary btn-light justify-start text-start'} to={'/createCourse'}>Create A Course</NavLink>
                }
            </div>

            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;