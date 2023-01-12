import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllSellers = () => {
    const sellersData = useLoaderData();
    return (
        <div>
            <div className='p-5'>
                <h2 className="text-4xl pb-2 font-mono">All Sellers</h2>
                {
                    sellersData.length !== 0 ?
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sellersData.map(data =>
                                        data.userType === 'Seller' &&
                                        <tr key={data._id}>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={data.userPicture} alt="" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{data.userName}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {data.userEmail}
                                            </td>
                                            <th>
                                                <button className="btn btn-ghost btn-xs">{data.userType}</button>
                                            </th>
                                        </tr>
                                    )
                                    }
                                </tbody>
                            </table>
                        </div>
                        :
                        <h2 className="flex items-center justify-center text-4xl p-2 font-mono">No data found</h2>
                }
            </div>
        </div>
    );
};

export default AllSellers;