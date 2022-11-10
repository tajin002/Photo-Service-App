import { createBrowserRouter } from "react-router-dom";
import Error from "../../Error/Error";
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
        errorElement:<Error/>,
        children: 
        [
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"/home",
                loader: () => fetch('https://fullstack-app-server.vercel.app/home'),
                element: <Home/>
            },
            {
                path: '/services',
                element : <Services/>
            },
            {
                path: '/services/:id',
                element : <ServiceDetails />,
                loader : ({params})=> fetch(`https://fullstack-app-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/review',
                element: <PrivateRouter><Review/></PrivateRouter>
            },


            {
                path : '/review/:id',
                element: <Update />,
                loader : ({params})=> {
                    fetch(`https://fullstack-app-server.vercel.app/review/${params.id}`,)
                }
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