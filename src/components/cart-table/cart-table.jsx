import React from 'react'

import './cart-table.css'

const CartTable = () => {
    return (
        <div className="cart-table">
            <h2>Your order</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#</td>
                        <td>Site Reliability Engineering</td>
                        <td>2</td>
                        <td>$40</td>
                        <td className='td-action'>
                            <button className='btn btn-small btn-outline-success'>
                                <i className="fa fa-plus-circle"></i>
                            </button>
                            <button className='btn btn-small btn-outline-warning'>
                                <i className="fa fa-minus-circle"></i>
                            </button>
                            <button className='btn btn-small btn-outline-danger'>
                                <i className="fa fa-trash-o"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="total">
                Total: $201
            </div>
        </div>
    )
}

export default CartTable