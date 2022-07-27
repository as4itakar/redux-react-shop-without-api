import React, {useCallback, useState} from 'react';
import {useSelector} from "react-redux";
import {BiCartAlt} from "react-icons/bi";
import './cart-block.css'
import CartMenu from "./cart-menu";
import ItemsInCart from "./items-in-cart";
import {useNavigate} from "react-router-dom";



const CartBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const items = useSelector(state => state.cart.itemsInCart)
    const totalPrice = items.reduce((acc, game)=>acc+=game.price, 0)
    const navigate = useNavigate()

    const handleClick= useCallback(()=>{
        setIsCartMenuVisible(false)
        navigate('/order')
    }, [navigate]);

    return (
        <div className='cart-block'>
            <ItemsInCart quantity={items.length}/>
            <BiCartAlt size={24} className='cart-block__icon' onClick={()=>setIsCartMenuVisible(!isCartMenuVisible)}/>
            {totalPrice > 0 ? <span className='cart-block__total-price'> {totalPrice} руб.</span>: null}
            {isCartMenuVisible &&<CartMenu items={items} onClick={handleClick} totalPrice={totalPrice}/>}

        </div>
    );
};

export default CartBlock;