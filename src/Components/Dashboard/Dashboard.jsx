import React, { useContext } from "react";
import { NavLink, Outlet, Link } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import { MdSpaceDashboard, MdLibraryBooks, MdChecklist, MdAddBox } from "react-icons/md";
import { IoCreateSharp, IoMenu } from "react-icons/io5";
import DashMenu from "../../shared/DashMenu";
import WebLogo from "../../shared/WebLogo";
import { IoMdHome } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { toast } from "react-toastify";

const Dashboard = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = async () => {
        try {
            await logOut();
            toast.success('Logged out successfully');
        } catch (err) {
            toast.error(err.message);
        }
    }

    return (
        <div className="min-h-screen bg-base-100">
            <div className="drawer lg:drawer-open">
                {/* Drawer toggle (mobile) */}
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

                {/* Main content */}
                <div className="drawer-content flex flex-col">
                    {/* Topbar */}
                    <div className="sticky top-0 z-40 border-b border-base-200 bg-base-100">
                        <div className="flex items-center justify-between px-4 md:px-6 py-4">
                            <div className="flex items-center gap-3">
                                {/* Mobile menu button */}
                                <label
                                    htmlFor="dashboard-drawer"
                                    className="btn btn-ghost lg:hidden"
                                >
                                    <IoMenu className="text-lg md:text-2xl" />
                                </label>

                                <div className="flex items-center gap-2">
                                    <MdSpaceDashboard className="text-xl text-primary" />
                                    <h1 className="md:text-xl font-semibold">
                                        Dashboard
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Page content */}
                    <main className="p-4 md:p-6">
                        <Outlet />
                    </main>
                </div>

                {/* Sidebar */}
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay z-10"></label>

                    <aside className="w-72 bg-base-200 min-h-full border-r border-base-300 z-50 flex justify-between flex-col">

                        <div>
                            <div className="w-full p-4 mt-16 md:mt-0 flex items-center">
                                <Link to={'/dashboard'} className="px-5 py-6 border-b border-base-300 hover:scale-105 hover:bg-primary/20 w-full rounded-lg">
                                    <p className="text-sm text-base-content/70">Welcome</p>
                                    <p className="font-semibold text-base-content line-clamp-1">
                                        {user?.displayName || "User"}
                                    </p>
                                    <p className="text-xs text-base-content/60 line-clamp-1">
                                        {user?.email || ""}
                                    </p>
                                </Link>
                            </div>

                            <ul className="dashNav w-full menu p-4 gap-1">

                                {user && (
                                    <>
                                        <DashMenu
                                            label={'My Courses'}
                                            icon={MdLibraryBooks}
                                            to={'/dashboard/myCreations'}
                                        />

                                        <DashMenu
                                            label={'My Enrollments'}
                                            icon={MdChecklist}
                                            to={'/dashboard/myEnrolements'}
                                        />

                                        <DashMenu
                                            label={'Create Course'}
                                            icon={IoCreateSharp}
                                            to={'/dashboard/createCourse'}
                                        />

                                    </>
                                )}

                                {/* Optional: add a "Back to Home" shortcut */}
                                <div className="my-3 border-t border-base-300"></div>


                            </ul>
                        </div>

                        <ul className="dashNav w-full menu p-4 gap-1">
                            <DashMenu
                                label={'Home'}
                                icon={IoMdHome}
                                to={'/'}
                            />
                            {
                                user && (
                                    <Link 
                                    onClick={handleLogOut}
                                    className={`flex items-center gap-2 rounded-lg px-4 py-3 transition-all w-full text-base-content hover:bg-primary/20`}>
                                        <LuLogOut className="text-xl" />
                                        LogOut
                                    </Link>
                                )
                            }
                        </ul>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
