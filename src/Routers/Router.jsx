import {
    createBrowserRouter,
} from "react-router-dom";
import Mainroute from "./Mainroute";
import Home from "../Component/Home/Home";
import Mainhome from "../Component/Mainhome/Mainhome";
import Categorydetails from "../Component/Category/Categorydetails";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainroute/>,
        children : [
            {
              
                path:'/',
                element: <Mainhome/>,
                children : [
                    {
                        index: true,
                        path: '/',
                        element: <Categorydetails />
                    },
                    {
                        path: '/categorydtails/:id',
                        loader :() =>fetch('/news.json'),
                        element: <Categorydetails />
                    },
                ]
            },
          
           
        ]
    },
]);