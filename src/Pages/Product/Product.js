import React from 'react';

const Product = () => {
    return (
        <div>
            <select name="slot" className="select select-bordered w-full">

                <option
                    value={' Hola' }
                >Hola</option>
                <option
                    value={' Go' }
                >Go</option>

            </select>
        </div>
    );
};

export default Product;