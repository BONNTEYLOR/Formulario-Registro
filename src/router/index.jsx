import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import  RecoverPassword  from "../pages/RecoverPassword";
import Register from "../pages/Register";


export const router = createBrowserRouter([
    {
        path:"/",
        element: <LayoutPublic/>,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/recoverpassword",
                element: <RecoverPassword />,
            }
        ]
    },
])