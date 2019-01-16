import React from 'react';

const Change = ({ name, changeGroceries }) => (
    <div className="change">
        <button onClick={() => changeGroceries( name )}className="changeAdding"> - </button>
    </div>
)

export default Change