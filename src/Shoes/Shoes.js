import React from 'react';
import { add, multiply } from '../utilities/calculate';

const Shoes = () => {
    const first = 13;
    const second = 7;
    const result = multiply(first,second);
    const total = add(first,second);
    return (
        <div>
            <h3>This is Shoe Components</h3>
            <p>Result: {result} and Total is :{total}</p>
        </div>
    );
};

export default Shoes;