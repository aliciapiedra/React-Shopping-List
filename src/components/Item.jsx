import React from 'react';
import Change from './Change';

const Item = ({ symbol, item, status, handleChange }) => (
    <div className="item">
        <span className="item-name">
            <span>{item.name}</span>
        </span>
        <Change symbol={symbol} status={status} item={item} handleChange={handleChange}/>
    </div>
)

export default Item