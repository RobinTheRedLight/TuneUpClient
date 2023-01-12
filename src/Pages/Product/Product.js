import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Product = () => {
    const { user } = useContext(AuthContext);
    const products = useLoaderData();
    const handleBook = () => {
        alert('Completed');
    }
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
                                    <label htmlFor="my-modal-6" className="btn">Book Now</label>
                                </div>
                                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                                <div className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                        <div className='text-center p-5'>
                                            <div className='text-center'>
                                                <h1 className='p-6 text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-red-300'>Book Now!</h1>
                                            </div>
                                            <div className='flex justify-center mt-5'>
                                                <form>
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="hidden sm:block label-text">Full Name</span>
                                                        </label>
                                                        <label className="input-group">
                                                            <span className='hidden sm:inline-flex'>Full Name</span>
                                                            <input type="text" id="name" name="name" value={user.displayName} readonly required className="w-full sm:text-left text-center sm:w-80 input input-bordered" />
                                                        </label>
                                                    </div>

                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="hidden sm:block label-text">Email Address</span>
                                                        </label>
                                                        <label className="input-group">
                                                            <span className='hidden sm:inline-flex'>Your Email</span>
                                                            <input type="text" id="email" name="email" value={user.email} readonly required className="w-full sm:text-left text-center sm:w-80 input input-bordered" />
                                                        </label>
                                                    </div>
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="hidden sm:block label-text">Item Name</span>
                                                        </label>
                                                        <label className="input-group">
                                                            <span className='hidden sm:inline-flex'>Item Name</span>
                                                            <input type="text" id="itemName" name="itemName" value={d.productName} readonly required className="w-full sm:text-left text-center sm:w-80 input input-bordered" />
                                                        </label>
                                                    </div>
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="hidden sm:block label-text">Product Price</span>
                                                        </label>
                                                        <label className="input-group">
                                                            <span className='hidden sm:inline-flex'>Product Price</span>
                                                            <input type="text" id="productPrice" name="productPrice" value={d.price} readonly required className="w-full sm:text-left text-center sm:w-80 input input-bordered" />
                                                        </label>
                                                    </div>

                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="hidden sm:block label-text">Phone Number</span>
                                                        </label>
                                                        <label className="input-group">
                                                            <span className='hidden sm:inline-flex'>Phone Number</span>
                                                            <input name="number" type="number" placeholder="Phone Number" required className="w-full sm:text-left text-center sm:w-80 input input-bordered" />
                                                        </label>
                                                    </div>

                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="hidden sm:block label-text">Meeting Location</span>
                                                        </label>
                                                        <label className="input-group">
                                                            <span className='hidden sm:inline-flex'>Meeting Location</span>
                                                            <input name="location" type="text" placeholder="Meeting Location" required className="w-full sm:text-left text-center sm:w-80 input input-bordered" />
                                                        </label>
                                                    </div>

                                                    <button onClick={handleBook} className=" btn btn-accent mt-4">Book</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
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