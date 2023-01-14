import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const MyProducts = () => {
    const orderData = useLoaderData();
    const { loading, user } = useContext(AuthContext);

    if (!user && loading) {
        return <progress className="progress w-56"></progress>
    }

    const handleAdvertise = e => {

        fetch(`http://localhost:5000/adData/${e}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    toast.success('Advertised!', {
                        duration: 700
                    });
                }
            })
            .catch(er => console.error(er));
    }

    return (
        <div>
            <div className='p-2 grid grid-cols-2 gap-4'>
                {
                    orderData.map(d =>
                        <div key={d._id} className="card w-96 bg-base-100 shadow-xl">
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
                                    <button onClick={() => handleAdvertise(d._id)} className="btn btn-primary">Advertise</button>
                                    <Toaster />
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