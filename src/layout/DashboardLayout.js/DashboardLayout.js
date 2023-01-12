import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';
import Header from '../../Shared/Header/Header';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                    
                        {
                            isAdmin &&
                            <>
                                <li><Link to="/dashboard/allusers">All Sellers</Link></li>
                                <li><Link to="/dashboard/adddoctor">All Buyers</Link></li>
                                <li><Link to="/dashboard/managedoctors">Reported Items</Link></li>
                            </>
                        }

                        {
                            isSeller &&
                            <>
                                <li><Link to="/dashboard/addproduct">Add A Product</Link></li>
                                <li><Link to="/dashboard/adddoctor">My Products</Link></li>
                                <li><Link to="/dashboard/managedoctors">My Buyers</Link></li>
                            </>
                        }
                        {
                            user && !isAdmin && !isSeller &&

                            <li><Link to="/dashboard/managedoctors">My Orders</Link></li>


                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;