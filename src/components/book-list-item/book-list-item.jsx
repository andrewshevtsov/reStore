import React from 'react'

import './book-list-item.css'

const BookListItem = ({book, onAddedToCart}) => {

    const {title, author, price, coverImage} = book

    return (
        <div className='book-list-item'>
            <div className="book-cover">
                <img src={coverImage} alt="book cover"/>
            </div>
            <div className="book-details">
                <span className='book-title'>{title}</span>
                <p className='book-author'>{author}</p>
                <p className='book-price'>${price}</p>
                <button
                    onClick={onAddedToCart}
                    className='btn btn-info add-to-cart'>
                        Add To Cart
                </button>
            </div>
            <hr/>
        </div>
    )
}

export default BookListItem