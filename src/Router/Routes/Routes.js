import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../../Pages/Access/Login/Login";
import Register from "../../Pages/Access/Register/Register";
import Home from "../../Pages/Home/Home/Home";
import Review from "../../Pages/Review/Review";
import Services from "../../Pages/Services/Services";

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
                element: <Home/>
            },
            {
                path: '/services',
                element : <Services/>
            },
            {
                path: '/review',
                element: <Review/>
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