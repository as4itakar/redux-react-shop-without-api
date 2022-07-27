import React from 'react';
import {Link} from "react-router-dom";
import './header.css'
import CartBlock from "./cart-block";

const Header = () => {
    return (
        <div className='header'>
            <div className="wrapper">
                <Link to='/' className='logo'>Game Store.</Link>
            </div>
            <div className="cart">
                <CartBlock/>
            </div>
        </div>
    );
};

export default Header;