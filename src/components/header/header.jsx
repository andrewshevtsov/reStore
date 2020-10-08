import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './header.css'

const Header = ({items, total}) => {

    let headerAmountItems = 0

    items.forEach((el, idx) => {
        headerAmountItems += el.count
    })

    return (
        <header className='header row'>
            <Link to='/'>
                <div className="logo text-dark">ReStore</div>
            </Link>
            <Link to='/cartpage'>
                <div className='shopping-cart'>
                    <i className="cart-icon fa fa-shopping-cart"></i>
                    {headerAmountItems} items (${total})
                </div>
            </Link>
        </header>
    )
}

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
    return {
        items: cartItems,
        total: orderTotal
    }
}

export default connect(mapStateToProps)(Header)