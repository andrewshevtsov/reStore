import React from 'react'
import {Link} from 'react-router-dom'

import './header.css'

const Header = ({numItems, total}) => {

    return (
        <header className='header row'>
            <Link to='/'>
                <div className="logo text-dark">ReStore</div>
            </Link>
            <Link to='/cartpage'>
                <div className='shopping-cart'>
                    <i className="cart-icon fa fa-shopping-cart"></i>
                    {numItems} items (${total})
                </div>
            </Link>
        </header>
    )
}

export default Header