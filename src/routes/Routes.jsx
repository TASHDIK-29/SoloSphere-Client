import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/authentication/Login";
import Registration from "../pages/authentication/Register";
import JobDetails from "../pages/JobDetails";
import AddJob from "../pages/AddJob";
import ErrorPage from "../pages/ErrorPage";
import MyPostedJobs from "../pages/MyPostedJobs";
import UpdateJob from "../pages/UpdateJob";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            index: true,
            element: <Home></Home>,
            // loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/jobs`)
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/registration',
            element: <Registration></Registration>
        },
        {
            path: '/job/:id',
            element: <JobDetails></JobDetails>,
            loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/jobs/${params.id}`)
        },
        {
            path: '/updateJob/:id',
            element: <UpdateJob></UpdateJob>,
            loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/jobs/${params.id}`)
        },
        {
            path: '/addJob',
            element: <AddJob></AddJob>,
        },
        {
            path: '/myPostedJobs',
            element: <MyPostedJobs></MyPostedJobs>,
        },
      ]
    },
  ]);


  export default router;