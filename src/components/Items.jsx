import React from 'react';
import Item from './Item';

const Items = ({ list }) => (
    <div>
        {
            list.map((item, i) => <Item key={i} grocery={item}/>)
        }
    </div>
)

export default Items