import { createBrowserRouter } from "react-router-dom";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import AppLayout from "../Layout/AppLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllBook from "../Pages/AllBook";
import AddBook from "../Pages/AddBook";
import EditBook from "../Pages/EditBook";
import BookDetail from "../Pages/BookDetail";
import WishList from "../Pages/WishList";
import PrivateRoute from "../Hooks/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        errorElement: <NotFound/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/allBooks',
                element: <PrivateRoute><AllBook/></PrivateRoute>
            },
            {
                path: '/addBook',
                element: <PrivateRoute><AddBook/></PrivateRoute>
            },
            {
                path: '/editBook/:id',
                element: <PrivateRoute><EditBook/></PrivateRoute>
            },
            {
                path: '/bookDetail/:id',
                element: <PrivateRoute><BookDetail/></PrivateRoute>
            },
            {
                path: '/wishlist',
                element: <PrivateRoute><WishList/></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
        ]
    }
])

export default router;