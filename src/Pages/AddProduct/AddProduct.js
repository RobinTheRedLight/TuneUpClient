import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const AddProduct = () => {
    const { loading, user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [categoriesData, setCategoriesData] = useState([]);

    useEffect(() => {
        fetch('https://tune-up-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategoriesData(data))
    })

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const pname = form.pname.value;
        const price = form.price.value;
        const condition = form.condition.value;
        const number = form.number.value;
        const location = form.location.value;
        const photo = form.photo.value;
        const date = form.date.value;
        const category = form.category.value;
        const description = form.description.value;
        const oprice = form.oprice.value;
        const year = form.year.value;

        const products = {
            productName: pname,
            price: price,
            condition: condition,
            phoneNumber: number,
            location: location,
            category: category,
            description: description,
            photo: photo,
            date: date,
            userName: user.displayName,
            userType: 'Buyer',
            userPicture: user.photoURL,
            userEmail: user.email.toLowerCase(),
            oprice: oprice,
            year: year
        }

        console.log(products);

        fetch('https://tune-up-server.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast(' Added successfully')
                }
            })
            .catch(er => console.error(er));

        navigate(`/dashboard/myproducts/${user.email}`);
    }

    if (loading) {
        return <div className="radial-progress" style={{ "--value": "70", "--size": "12rem", "--thickness": "2px" }}>
            70%
        </div>

    }
    return (
        <div className='flex start'>
            <div className='p-2'>
                <div className='text-center'>
                    <h1 className='p-2 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-red-300'>Add A Product</h1>
                </div>
                <div className='flex justify-center mt-5'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control w-96">
                            <label className="input-group">
                                <input name="pname" type="text" placeholder="Product Name" required className="w-full sm:text-left text-center input input-bordered input-md" />
                            </label>
                        </div>
                        <div className="form-control mt-2 w-96">
                            <label className="input-group">
                                <input name="price" type="text" placeholder="Price" required className="w-full sm:text-left text-center  input input-bordered input-md" />
                            </label>
                        </div>
                        <div className="form-control mt-2 w-96">
                            <label className="label">
                                <span className="hidden sm:block label-text">Condition Type</span>
                            </label>
                            <select name="condition" className="select select-bordered w-full">
                                <option value={'Excellent'}>Excellent</option>
                                <option value={'Good'}>Good</option>
                                <option value={'Fair'}>Fair</option>
                            </select>
                        </div>
                        <div className="form-control mt-2 w-96">
                            <label className="input-group">
                                <input name="number" type="number" placeholder="Mobile Number" required className="w-full sm:text-left text-center input input-bordered input-md" />
                            </label>
                        </div>
                        <div className="form-control mt-2 w-96">
                            <label className="input-group">
                                <input name="location" type="text" placeholder="Location" required className="w-full sm:text-left text-center  input input-bordered input-md" />
                            </label>
                        </div>
                        <div className="form-control mt-2 w-96">
                            <label className="input-group">
                                <input name="photo" type="url" placeholder="photoURL" required className="w-full sm:text-left text-center  input input-bordered input-md" />
                            </label>
                        </div>
                        <div className="form-control mt-2 w-96">
                            <label className="input-group">
                                <input name="oprice" type="text" placeholder="Original Price" required className="w-full sm:text-left text-center  input input-bordered input-md" />
                            </label>
                        </div>
                        <div className="form-control mt-2 w-96">
                            <label className="input-group">
                                <input name="year" type="number" placeholder="Years of use" required className="w-full sm:text-left text-center  input input-bordered input-md" />
                            </label>
                        </div>
                        <div className="form-control mt-2 w-96">
                            <label className="input-group">
                                <input name="date" type="date" placeholder="Year of purchase" required className="w-full sm:text-left text-center  input input-bordered input-md" />
                            </label>
                        </div>
                        <div className="form-control mt-2 w-96">
                            <label className="label">
                                <span className="hidden sm:block label-text">Product Category</span>
                            </label>
                            <select name="category" className="select select-bordered w-full">
                                {
                                    categoriesData.map(d =>
                                        <option key={d._id} value={`${d.name}`}>{d.name}</option>
                                    )
                                }
                            </select>
                        </div>

                        <div className="form-control mt-2 w-96">
                            <textarea name='description' className="textarea textarea-info" placeholder="Description"></textarea>
                        </div>

                        <div>
                            <p className="text-red-700"></p>
                        </div>
                        <button className=" btn btn-accent mt-4">Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;