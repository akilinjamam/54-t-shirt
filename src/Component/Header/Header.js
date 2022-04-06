import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>


            <ul>
                <li>
                    <Link to="/home">Home</Link>
                    <Link to="/order">Order</Link>
                    <Link to="/review"> Review</Link>
                    <Link to="/grandpaa"> Grand paa</Link>
                </li>
            </ul>

        </div>
    );
};

export default Header;