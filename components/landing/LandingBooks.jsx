import React from 'react'

import book1 from "../../public/images/books/1.png";
import book2 from "../../public/images/books/2.png";
import book3 from "../../public/images/books/3.png";
import book4 from "../../public/images/books/4.png";
import book5 from "../../public/images/books/5.png";
import book6 from "../../public/images/books/6.png";
import book7 from "../../public/images/books/7.png";
import book8 from "../../public/images/books/8.png";
import book9 from "../../public/images/books/9.png";
import book10 from "../../public/images/books/10.png";
import book11 from "../../public/images/books/11.png";
import book12 from "../../public/images/books/12.png";
import book13 from "../../public/images/books/13.png";
import book14 from "../../public/images/books/14.png";
import book15 from "../../public/images/books/15.png";


function LandingBooks(props) {

    return (
        <div className="landing-books-container">

            <div className="book-wrap">
                <img src={book1} alt="Chronicle image" className="book-image" />
                <div className="book-label-container">
                    <p className="book-label">
                        Oddílová kronika <br />
                        1946–1952, A4</p>
                </div>
            </div>
            <div className="book-wrap">
                <img src={book3} alt="Chronicle image" className="book-image" />
                <div className="book-label-container">
                <p className="book-label">
                Fotoalbum 1 <br />
                1947–1958, A4
</p>
                </div>
            </div>
            <div className="book-wrap">
                <img src={book2} alt="Chronicle image" className="book-image" />
                <div className="book-label-container">
                <p className="book-label">
                Fotoalbum 2 <br />
                1958–1981, A4</p>                
                        </div>
            </div>
            <div className="book-wrap">
                <img src={book4} alt="Chronicle image" className="book-image" />
                <div className="book-label-container">
                <p className="book-label">
                        Oddílová kronika <br />
                        1969, A4</p>
                                        </div>
            </div>
            <div className="book-wrap">
                <img src={book5} alt="Chronicle image" className="book-image" />
                <div className="book-label-container">
                <p className="book-label">
                        Oddílová kronika <br />
                        1977–1986, A4</p>
                                        </div>
            </div>
            <div className="book-wrap">
                <img src={book6} alt="Chronicle image" className="book-image" />
                <div className="book-label-container">
                <p className="book-label">
                Putovní tábor <br />
                        1980, A4</p>
                                        </div>
            </div>
            <div className="book-wrap">
                <img src={book7} alt="Chronicle image" className="book-image" />
                <div className="book-label-container">
                <p className="book-label">
                        Oddílová kronika <br />
                        1990–1993, A4</p>
                                        </div>
            </div>
            <div className="book-wrap">
                <img src={book8} alt="Chronicle image" className="book-image" />
                <div className="book-label-container">
                <p className="book-label">
                Fotoalbum osobností <br />
                1990–2013, A3</p>
                                        </div>
            </div>
            <div className="book-wrap">
                <img src={book9} alt="Chronicle image" className="book-image" />
                <div className="book-label-container">
                <p className="book-label">
                Fotoalbum výprav <br />
                1990–2014, A3</p>
                                        </div>
            </div>
            <div className="book-wrap">
                <img src={book10} alt="Chronicle image" className="book-image" />
                <div className="book-label-container">
                <p className="book-label">
                Fotoalbum táborů <br />
                1990–2012, A3</p>
                                        </div>
            </div>
            <div className="book-wrap">
                <img src={book11} alt="Chronicle image" className="book-image" />
                <div className="book-label-container">
                <p className="book-label">
                        Oddílová kronika <br />
                        1995–2000, A4</p>
                                        </div>
            </div>
            <div className="book-wrap">
                <img src={book12} alt="Chronicle image" className="book-image" />
                <div className="book-label-container">
                <p className="book-label">
                        Oddílová kronika <br />
                        2000–2005, A4</p>
                                        </div>
            </div>
            <div className="book-wrap">
                <img src={book13} alt="Chronicle image" className="book-image" />
                <div className="book-label-container">
                <p className="book-label">
                        Oddílová kronika <br />
                        2009, A4</p>
                                        </div>
            </div>
            <div className="book-wrap">
                <img src={book14} alt="Chronicle image" className="book-image" />
                <div className="book-label-container">
                <p className="book-label">
                        Oddílová kronika <br />
                        2011, A5</p>
                                        </div>
            </div>
            <div className="book-wrap">
                <img src={book15} alt="Chronicle image" className="book-image" />
                <div className="book-label-container">
                <p className="book-label">
                        Oddílová kronika <br />
                        2012–dále, A4</p>
                                        </div>
            </div>
        </div >
    )
}


export default LandingBooks