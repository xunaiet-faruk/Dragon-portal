import { createBrowserRouter } from "react-router-dom";
import Mainroute from "./Mainroute";
import Mainhome from "../Component/Mainhome/Mainhome";
import Categorydetails from "../Component/Category/Categorydetails";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainroute />,
        children: [
            {
                path: "/",
                element: <Mainhome />,
                children: [
                   
                   
                    {
                        index :true,
                        path: "categorydtails/:id",
                        loader: () => fetch("/news.json"),
                        element: <Categorydetails />
                    },
                   
                   
                   
                ]
            }
        ]
     
    },
   
   
]);
