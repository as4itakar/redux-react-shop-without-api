import React from 'react';
import './cart-item.css'
const CartItem = ({price, title, id}) => {
    return (
        <div className='cart-item'>
            <span>{title}</span>
            <div className="price">
                <span>{price} руб.</span>
            </div>

        </div>
    );
};

export default CartItem;