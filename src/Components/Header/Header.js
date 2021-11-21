import React from 'react';
import './Header.css'
import logo from '../../images/download.jpg'

const Header = () => {
    return (
        <div className='header-container'>
            <img src={logo} alt="" />
            <nav>
                <a href="/Home">Home</a>
                <a href="/About">About</a>
                <a href="/Order">Order</a>
            </nav>

        </div>
    );
};

export default Header;