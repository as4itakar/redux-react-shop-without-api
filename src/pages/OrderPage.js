import React from 'react';
import '../assets/OrderPage.css'
import {useSelector} from "react-redux";
import OrderItem from "../components/order-item";

const OrderPage = () => {
    const items = useSelector(state=> state.cart.itemsInCart)
    const totalPrice = items.reduce((acc, game)=>acc+=game.price, 0)

    if (items.length===0){
        return <h1>Ваша корзина пуста</h1>
    }

    return (
        <div className='order-page'>
            <div className="order-page__left">
                {items.map(game=><OrderItem game={game}/>)}
            </div>
            <div className="order-page__right">
                <div className="order-page__total-price">
                    <span>
                        {items.length>1? items.length + ' ' + 'товара на сумму '+ totalPrice + ' ' + 'руб.':items.length + ' ' + 'товар на сумму '+ totalPrice + ' ' + 'руб.'}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;