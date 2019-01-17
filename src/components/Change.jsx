import React from 'react';

const Change = ({ name, changeGroceries, reputGrocery }) => (
    <div className="change">
        <button onClick={() => changeGroceries( name )} className="changeAdding"> - </button>
        <button onClick={() => reputGrocery( name )} className="changeAdding"> + </button>
    </div>
)

export default Change