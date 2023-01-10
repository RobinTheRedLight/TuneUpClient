import React, { useEffect, useState } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
    const [categoriesData, setCategoriesData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategoriesData(data))
    })
    return (
        <div>
            <div className='grid md:grid-cols-5 gap-4 p-2'>
                <div className='col-span-2 pt-1'>
                    <div className='grid grid-rows-5 grid-flow-col gap-10'>
                        <div className='row-span-3'>
                            <div className="hero w-full h-full" style={{ backgroundImage: `url("1.jpg")` }}>
                                <div className="hero-overlay bg-opacity-60"></div>
                                <div className="hero-content text-center text-white font-mono">
                                    <div className="max-w-md">
                                        <h1 className="mb-5 text-5xl font-bold">TuneUP</h1>
                                        <p className="mb-5">If you are looking to buy a used guitar, the TuneUp market can be a great place to find a wide variety of different guitar types, brands, and models at more affordable prices.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row-span-2'>
                            <div className=" bg-base-200 border-2 border-sky-500">
                                <div className='p-3'>
                                    <div className='grid grid-cols-12 gap-4'>
                                        <div className='col-span-8 '>
                                            <div className='p-1'>
                                                <h1 className='text-4xl font-mono'>About</h1>
                                                <div className=' text-lg text-justify pt-2'>
                                                    <p>We are a team of dedicated individuals who are passionate about providing our customers with the best products and shopping experience.We understand the importance of customer satisfaction and strive to provide excellent customer service. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-span-4 border-l-4 border-sky-500'>
                                            <div className='p-1'>
                                                <h1 className='text-2xl font-mono'>Follow Us</h1>
                                                <div className="flex flex-col pt-5">
                                                    <div className='pt-3'>
                                                        <Link className='flex justify-evenly btn-link'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                                                            <div>
                                                                <h3 className='text-2xl font-mono'>Twitter</h3>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className='pt-3'>
                                                        <Link className='flex justify-evenly btn-link'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
                                                            <div>
                                                                <h3 className='text-2xl font-mono'>YouTube</h3>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className='pt-3'>
                                                        <Link className='flex justify-evenly btn-link'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
                                                            <div>
                                                                <h3 className='text-2xl font-mono'>Facebook</h3>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-3'>
                    <div className='grid grid-rows-3 grid-flow-col'>
                        <div className='row-span-2'>
                            <div className='flex'>
                                {
                                    categoriesData.map(d =>
                                        <div key={d._id} className="p-1">
                                            <div className="card card-compact w-100 bg-base-100  border-2 border-sky-500">
                                                <figure><img className='w-52 h-44' src={d.image} alt="Guitar" /></figure>
                                                <div className="card-body">
                                                    <h2 className="text-xl">{d.name}</h2>
                                                    <p className='text-justify'>{d.description}</p>
                                                    <div className="card-actions">
                                                        <Link to={`/categories/${d._id}`}>
                                                            <button className="w-full btn btn-primary">Products</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className='row-span-1'>
                            <div className='row-span-2  border-2 border-sky-500'>
                                <div className="hero w-full bg-base-200 shadow-xl">
                                    <div className="hero-content text-center">
                                        <div className="max-w-md">
                                            <div className='flex justify-evenly'>
                                                <div>
                                                    <FaExclamationTriangle size={40} />
                                                </div>
                                                <h1 className="text-5xl font-bold">Warning
                                                </h1>
                                            </div>
                                            <p className="py-6 text-justify"> Buying a used product can be a cost-effective option, but it's important to thoroughly inspect the item before making a purchase. Look for any signs of wear and tear, damage, or defects. Test all functions and make sure they are in working order.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;