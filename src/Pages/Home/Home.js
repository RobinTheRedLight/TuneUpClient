import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='grid md:grid-cols-5 gap-4'>
                <div className='col-span-2'>
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
                            <div className='flex justify-around'>
                                <div className="card pr-2 card-compact w-100 bg-base-100 shadow-xl">
                                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Shoes!</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card pr-2 card-compact w-100 bg-base-100 shadow-xl">
                                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Shoes!</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card pr-2 h-[29rem] w-100 bg-base-100 shadow-xl">
                                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Shoes!</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row-span-1'>
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
                </div>
            </div>
        </div>
    );
};

export default Home;