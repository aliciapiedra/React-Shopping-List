import React from 'react';
import Change from './Change';

const Item = props => (
    <div className="item">
        <span className="item-name">
            <span>{props.grocery.name}</span>
        </span>
        <Change changeGroceries={props.changeGroceries} name={props.grocery.name} />
    </div>
)

export default Item