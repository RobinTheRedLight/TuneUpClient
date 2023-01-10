import React, { useEffect, useState } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

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
                    <div className='grid grid-rows-5 grid-flow-col gap-4'>
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
                            <div className="hero w-full bg-base-200">
                                <div className="hero-content text-center">
                                    <div className="max-w-md">
                                        <h1 className="text-5xl font-bold">Hello there</h1>
                                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                        <button className="btn btn-primary">Get Started</button>
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
                                                        <button className="w-full btn btn-primary">Products</button>
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