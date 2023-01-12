import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Product = () => {
    const products = useLoaderData();
    console.log(products)
    return (
        <div className='p-2 grid grid-cols-3 gap-4'>
            <div>
                {
                    products.map(d =>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img className='w-72 h-72' src={d.photo} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {d.productName}
                                    <div className="badge badge-secondary">Resale Price: {d.price} Tk</div>
                                </h2>
                                <div className='text-left'>
                                    <p><span className='text-xl font-mono'>Location:</span> <span className='font-mono'>{d.location}</span></p>
                                    <p><span className='text-xl font-mono'>Original Price:</span> <span className='font-mono'>{d.oprice}</span></p>
                                    <p><span className='text-xl font-mono'>Years of use:</span> <span className='font-mono'>{d.year} years</span></p>
                                    <p><span className='text-xl font-mono'>Date:</span> <span className='font-mono'>{d.date}</span></p>
                                    <p><span className='text-xl font-mono'>Seller's Name :</span> <span className='font-mono'>{d.userName}</span></p>
                                </div>

                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Book Now</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Product;