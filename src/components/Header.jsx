import React, { useState } from 'react';

const Header = React.memo(() => {
    const [modal, setModal] = useState(false);

    const toggleClass = () => {
        setModal(!modal);
    };

    return (
        <>
            <section className="Header">
                <header className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <a href="/" className="logo">
                                <img src="../image/logo.png" alt="logo" className='logo' />
                            </a>
                        </div>
                        <div className="main_navbar col-lg-4">
                            <nav>
                                <ul className="d-flex">
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <a href="/">Products</a>
                                        <i className="fa-sharp fa-solid fa-chevron-down"></i>
                                    </li>
                                    <li>
                                        <a href="/">About Us</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="search-container col-lg-4">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input
                                type="search"
                                placeholder="Search Products"
                                className="search-input"
                            />
                        </div>
                        <div className="add_card col-lg-2">
                            <button className="btn">
                                <i className="fa-solid fa-cart-shopping"></i>My Cart
                            </button>
                        </div>
                    </div>
                    {/* For mobile */}
                    <i className="fa-solid fa-bars mobile-toggle" onClick={toggleClass}></i>
                    {modal && (
                        <>
                            <ul className="d-flex">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/">Products</a>
                                    <i className="fa-sharp fa-solid fa-chevron-down"></i>
                                </li>
                                <li>
                                    <a href="/">About Us</a>
                                </li>
                            </ul>
                        </>
                    )}
                </header>
            </section>
        </>
    );
});

export default Header;
