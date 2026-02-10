import {
    createBrowserRouter,
} from "react-router-dom";
import Mainroute from "./Mainroute";
import Home from "../Component/Home/Home";
import Mainhome from "../Component/Mainhome/Mainhome";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainroute/>,
        children : [
            {
                index : true,
                element: <Home/>
            },
            {
                path:'/',
                element: <Mainhome/>
            },
        ]
    },
]);