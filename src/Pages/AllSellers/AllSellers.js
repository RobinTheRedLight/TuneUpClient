import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AllSellers = () => {
    const sellersData = useLoaderData();
    const [allSellersData, setAllSellersData] = useState(sellersData);
    const handleDelete = (e) => {
        const agree = window.confirm('Are you sure?');
        if (agree) {
            fetch(`http://localhost:5000/users/delete/${e}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingOrders = allSellersData.filter(d => d._id !== e);
                        setAllSellersData(remainingOrders);
                        alert('Deleted!');
                    }
                })
        }
    }
    return (
        <div>
            <div className='p-5'>
                <h2 className="text-4xl pb-2 font-mono">All Sellers</h2>
                {
                    allSellersData.length !== 0 ?
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allSellersData.map(data =>
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
                                                <button onClick={() => handleDelete(data._id)} className='btn btn-primary'>Delete</button>
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