import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const MyProducts = () => {
    const orderData = useLoaderData();
    const [displayOrderData, setDisplayOrderData] = useState(orderData);
    const { loading, user } = useContext(AuthContext);

    if (!user && loading) {
        return <progress className="progress w-56"></progress>
    }

    const handleDelete = e => {
        const agree = window.confirm('Are you sure?');
        if (agree) {
            fetch(`http://localhost:5000/products/${e}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Deleted!', {
                            duration: 700
                        });
                        const remainingOrders = displayOrderData.filter(d => d._id !== e);
                        setDisplayOrderData(remainingOrders);
                    }
                })
        }
    }

    const handleAdvertise = e => {

        const obj = {
            adID: e
        }
        console.log(obj)

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

        fetch('http://localhost:5000/adData', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(res => res.json())
            .then(data => {
                console.log(' Registered successfully')
            })
            .catch(er => console.error(er));
    }

    return (
        <div>
            <div className='p-2 grid grid-cols-2 gap-4'>
                {
                    displayOrderData.map(d =>
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
                                    <button onClick={() => handleDelete(d._id)} className="btn btn-primary">Delete</button>
                                    <Toaster />
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