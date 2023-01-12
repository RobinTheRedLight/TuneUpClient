import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const MyProducts = () => {
    const orderData = useLoaderData();
    const { loading, user } = useContext(AuthContext);

    return (
        <div>
            <div className='p-2 grid grid-cols-3 gap-4'>
                {
                    orderData.map(d =>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img className='w-72 h-72' src={d.photo} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {d.productName}
                                    <div className="badge badge-secondary">Resale</div>
                                </h2>
                                <div className='text-left'>
                                    <p><span className='text-xl font-mono'>Price: </span> <span className='font-mono'>{d.price} Tk</span></p>
                                </div>

                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Delete</button>
                                    <button className="btn btn-primary">Advertise</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyProducts;