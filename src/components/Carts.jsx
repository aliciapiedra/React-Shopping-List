import React from 'react';
import Cart from './Cart';
import inCart from '../data/InCart';

const Carts = ({ inCart, cartsList, reputGrocery, changeGroceries }) => (
    <div>
        {
         cartsList.map((item ) => <Cart cartsList={cartsList} changeGroceries={changeGroceries} reputGrocery={reputGrocery} />)
        }
    </div>
)

export default Carts