import React, { useState, useEffect } from 'react'

import books from "../../data/data_books.json"
import images from "./BooksPreviewPath"

import classes from "./books.scss"

function LandingBooks(props) {

    const [isTouchDevice] = useState(require('is-touch-device'))


    return (
        <div className="books-container">
            {books.map(book => {
                return(
                <div className={isTouchDevice ? "book-wrap " : "book-wrap book-wrap-hover"} key={book.ID}>
                    <img src={images[book.image]} alt="Chronicle image" className={isTouchDevice ? "book-image " : "book-image book-image-hover"} />
                    <div className="book-label-container">
                        <p className="book-label">
                            {book.text}   
                        </p>
                    </div>
                </div>
                )
            })}

        </div>
    )
}


export default LandingBooks