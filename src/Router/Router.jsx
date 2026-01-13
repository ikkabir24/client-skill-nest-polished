import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Home from "../Components/Home/Home";
import Dashboard from "../Components/Dashboard/Dashboard";
import AllCourses from "../Components/AllCourses/AllCourses";
import LoadingPage from "../Components/LoadingPage/LoadingPage";
import PrivateRoute from "./PrivateRoute";
import MyCreations from "../Components/MyCreations/MyCreations";
import CourseDetails from "../Components/CourseDetails/CourseDetails";
import CreateCourse from "../Components/MyCreations/CreateCourse";
import UpdateCourse from "../Components/MyCreations/UpdateCourse";
import MyEnrolements from "../Components/MyEnrolements/MyEnrolements";
import Error from "../Components/ErrorPage/Error";
import ContactUs from "../Components/ContactUs/ContactUs";
import AboutUs from "../Components/AboutUs/AboutUs";
import Profile from "../Components/Profile/Profile";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    index: true,
                    Component: Home,
                },
                {
                    path: '/contactUs',
                    Component: ContactUs
                },
                {
                    path: '/aboutUs',
                    Component: AboutUs
                },
                {
                    path: "/allCourses",
                    Component: AllCourses,
                    loader: () => fetch("http://localhost:3000/categories"),
                    HydrateFallback: LoadingPage
                },
                {
                    path: '/updateCourse/:id',
                    loader: ({ params }) => fetch(`http://localhost:3000/courses/${params.id}`),
                    HydrateFallback: LoadingPage,
                    element: <PrivateRoute><UpdateCourse></UpdateCourse></PrivateRoute>
                },
                {
                    path: '/courseDetails/:id',
                    loader: ({ params }) => fetch(`http://localhost:3000/courses/${params.id}`),
                    HydrateFallback: LoadingPage,
                    element: <CourseDetails></CourseDetails>
                },
                {
                    path: "/login",
                    Component: Login,
                },
                {
                    path: "/register",
                    Component: Register,
                },
                {
                    path: "/*",
                    Component: Error,
                },
            ]
        },
        {
            path: '/dashboard',
            element: <PrivateRoute>
                <Dashboard />
            </PrivateRoute>,
            children: [
                {
                    index: true,
                    Component: Profile
                },
                {
                    path: '/dashboard/myCreations',
                    element: <PrivateRoute><MyCreations></MyCreations></PrivateRoute>
                },
                {
                    path: '/dashboard/myEnrolements',
                    element: <PrivateRoute><MyEnrolements></MyEnrolements></PrivateRoute>
                },
                {
                    path: '/dashboard/createCourse',
                    element: <PrivateRoute><CreateCourse></CreateCourse></PrivateRoute>
                },
            ]
        },
    ]
)

export default router;