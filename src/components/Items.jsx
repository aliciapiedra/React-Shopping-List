import React from 'react';
import Item from './Item';
import groceriesList from '../data/GroceriesList';

const Items = ({ list }) => (
    <div>
        {
            list.map((item, i) => <Item key={i} groceries={groceriesList}/>)
        }
    </div>
)

export default Items