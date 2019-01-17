import React from 'react';
import Item from './Item';

const Items = ({ list, changeGroceries }) => (
    <div>
        {
            list.map((item ) => <Item grocery={item} changeGroceries={changeGroceries}/>)
        }
    </div>
)

export default Items