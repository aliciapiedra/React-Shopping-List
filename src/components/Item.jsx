import React from 'react';

const Item = props => (
    <div className="item">
        <span className="item-name">
            <span>{props.grocery.name}</span>
        </span>
    </div>
)

export default Item