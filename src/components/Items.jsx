import React from 'react';
import Item from './Item';

const Items = ({ list, changeGroceries, reputGrocery }) => (
    <div>
        {
            list.map((item ) => <Item grocery={item} changeGroceries={changeGroceries} reputGrocery={reputGrocery}/>)
        }
    </div>
)

export default Items