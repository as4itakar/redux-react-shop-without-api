import React from 'react';
import './cart-menu.css'

import Button from "./button";
import CartItem from "./cart-item";

const CartMenu = ({items, onClick, totalPrice}) => {
    return (
        <div className='cart-menu'>
            <div className="games-list">
                {
                    items.length>0 ?items.map(game=><CartItem key={game.title} price={game.price} title={game.title} id={game.id}/>):'Корзина пуста'
                }
            </div>
            {
                items.length>0 ?
                    <div className='arrange'>
                        <div className="total-price">
                            <span>Итого:</span>
                            <span>{totalPrice} руб.</span>
                        </div>
                        <Button type='primary' size='m' onClick={onClick}>
                            Оформить заказ
                        </Button>
                    </div>
                    :null
            }
        </div>
    );
};

export default CartMenu;