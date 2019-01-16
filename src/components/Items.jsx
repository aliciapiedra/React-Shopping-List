import React from 'react';
import Item from './Item';

const Items = ({ list, grocery, changeGroceries }) => (
    <div>
        {
            list.map((item ) => <Item grocery={item} changeGroceries={changeGroceries}/>)
        }
    </div>
)

export default Items