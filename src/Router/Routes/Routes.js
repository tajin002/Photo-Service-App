import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../../Pages/Access/Login/Login";
import Register from "../../Pages/Access/Register/Register";
import Home from "../../Pages/Home/Home/Home";

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