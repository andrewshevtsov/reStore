import React from 'react'

import './cart-table.css'
import { connect } from 'react-redux'

import { bookDecreaseInCart,
         bookIncreaseInCart,
         bookRowDeletedFromCart } from '../../actions'

const CartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {

    const renderRow = (item, idx) => {

        const { id, title, total, count } = item

        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td className='td-title'><span>{title}</span></td>
                <td>{count}</td>
                <td className="td-price">${total.toFixed(2)}</td>
                <td className='td-action'>
                    <button
                        onClick={() => onDecrease(id)}
                        className='btn btn-small btn-outline-warning'>
                        <i className="fa fa-minus-circle"></i>
                    </button>
                    <button
                        onClick={() => onIncrease(id)}
                        className='btn btn-small btn-outline-success'>
                        <i className="fa fa-plus-circle"></i>
                    </button>
                    <button
                        onClick={() => onDelete(id)}
                        className='btn btn-small btn-outline-danger'>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        )
    }

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
                    { items.map(renderRow) }
                </tbody>
            </table>
            <div className="total">Total: ${total}</div>
        </div>
    )
}

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal }}) => {
    return {
        items: cartItems,
        total: orderTotal
    }
}

const mapDispatchToProps = {
    onIncrease: bookIncreaseInCart,
    onDecrease: bookDecreaseInCart,
    onDelete: bookRowDeletedFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable)