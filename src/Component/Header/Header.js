import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <h1> Welcome To Tshirst Mania</h1>
            <nav>
               
               <Link to="/home">Home</Link>
               <Link to="/orderreview">Order Review</Link>
            </nav>
        </div>
    );
};

export default Header;