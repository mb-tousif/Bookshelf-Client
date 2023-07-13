import Main from "../Layout/Main";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import AppLayout from "../layout/AppLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        errorElement: <NotFound/>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    }
])

export default router;