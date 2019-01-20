import React from 'react';

const Change = ({ item, symbol, status, handleChange }) => (
       <button onClick={() => handleChange(item.id)} className={`item-action ${status}`}>{symbol}</button>
)

export default Change