import React from 'react';

const Cart = props => (
    <div className="item">
        <span className="item-name">
            <span>{props.inCart.name}</span>
        </span>
    </div>
)

export default Cart