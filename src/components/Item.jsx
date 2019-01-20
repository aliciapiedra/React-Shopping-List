import React from 'react';
import Change from './Change';

const Item = props => (
    <div className="item">
        <span className="item-name">
            <span>{props.grocery.name}</span>
        </span>
        <Change changeGroceries={props.changeGroceries} reputGrocery={props.reputGrocery} name={props.grocery.name} />
    </div>
)

export default Item