import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout.js/DashboardLayout";
import Main from "../layout/Main";
import LoginPage from "../Login/LoginPage/LoginPage";
import Registration from "../Login/Registration/Registration";
import AddProduct from "../Pages/AddProduct/AddProduct";
import AllBuyers from "../Pages/AllBuyers/AllBuyers";
import AllSellers from "../Pages/AllSellers/AllSellers";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";
import MyProducts from "../Pages/MyProducts/MyProducts";
import Product from "../Pages/Product/Product";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SellerRoute from "./SellerRoute/SellerRoute";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/categories/:name',
                element: <PrivateRoute><Product></Product></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.name}`)
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/login',
                element: <LoginPage></LoginPage>
            },
        ]
    },

    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute> <AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myproducts/:email',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.email}`)
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute> <AllSellers></AllSellers> </AdminRoute>,
                loader: () => fetch('http://localhost:5000/users')
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute> <AllBuyers></AllBuyers> </AdminRoute>,
                loader: () => fetch('http://localhost:5000/users')
            },
        ]
    }

])