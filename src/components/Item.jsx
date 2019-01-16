import React from 'react';
import Change from './Change';

const Item = ({props, changeGroceries }) => (
    <div className="item">
        <span className="item-name">
            <span>{props.grocery.name}</span>
        </span>
        <Change  changeGroceries={changeGroceries}/>
    </div>
)

export default Item