import React from 'react';
import Item from './Item';
import ItemHeader from './ItemHeader';

const Items = ({ needToBuy, inCart, handleChange }) => (
    <div className="shopping-list">
        <div className="to-buy">
            <ItemHeader title="Need To Buy" />
                {needToBuy.map(item => <Item symbol="+" status="add" item={item} key={item.id} handleChange={handleChange} /> )}
        </div>
        <div className="cart">
            <ItemHeader title="In Cart" />
                {inCart.map(item => <Item symbole ="-" status ="remove" item={item} key={item.id} handleChange={handleChange} />)}
        </div>
    </div>
)

export default Items