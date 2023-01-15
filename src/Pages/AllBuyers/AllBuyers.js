import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AllBuyers = () => {
    const buyersData = useLoaderData();
    const [allBuyersData, setAllBuyersData] = useState(buyersData);
    const handleDelete = (e) => {
        const agree = window.confirm('Are you sure?');
        if (agree) {
            fetch(`http://localhost:5000/users/delete/${e}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingOrders = allBuyersData.filter(d => d._id !== e);
                        setAllBuyersData(remainingOrders);
                        alert('Deleted!');
                    }
                })
        }
    }
    return (
        <div>
            <div className='p-5'>
                <h2 className="text-4xl pb-2 font-mono">All Buyers</h2>
                {
                    allBuyersData.length !== 0 ?
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
                                    {allBuyersData.map(data =>
                                        data.userType === 'Buyer' &&
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

export default AllBuyers;