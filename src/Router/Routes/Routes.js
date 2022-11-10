import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../../Pages/Access/Login/Login";
import Register from "../../Pages/Access/Register/Register";
import Product from "../../Pages/AddProduct/Product";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Review from "../../Pages/Review/Review";
import Update from "../../Pages/Review/Update";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services";
import PrivateRouter from "../PrivateRout/PrivateRouter";

export const router =createBrowserRouter([
    {
        path:"/",
        element: <Main/>,
        children: 
        [
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"/home",
                loader: () => fetch('http://localhost:5000//home'),
                element: <Home/>
            },
            {
                path: '/services',
                element : <PrivateRouter><Services/></PrivateRouter>
            },
            {
                path: '/services/:id',
                element : <ServiceDetails />,
                loader : ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/review',
                element: <PrivateRouter><Review/></PrivateRouter>
            },

            {
                path : '/update/:id',
                element: <Update />,
                loader : ({params})=> fetch(`http://localhost:5000/review/${params.id}`)
            },
            {
                path: '/product',
                element: <PrivateRouter><Product/></PrivateRouter>
            },
            {
                path : '/blog',
                element:<Blog />
            },
            {
                path:"login",
                element: <Login/>
            },
            {
                path:"register",
                element: <Register/>

            }
        ]
    }
])