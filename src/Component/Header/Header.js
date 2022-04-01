import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1> Welcome To This is header</h1>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/orderReview">Order</Link>
            </nav>
        </div>
    );
};

export default Header;