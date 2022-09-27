import React from 'react';
import { calculation } from '../../utilities/Calculation';
import './Shoes.css'

const Shoes = () => {
    const first = 50;
    const second =49;
    const result = calculation(first, second)
    return (
        <div className='shoes-container'>
            <h1>from shoes component</h1>
            <p>{result}</p>
            
        </div>
    );
};

export default Shoes;