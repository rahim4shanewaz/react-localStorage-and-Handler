import React from 'react';
import './Cosmetic.css'

const Cosmetic = ({user}) => {
    const {name, id, age, gender} = user;
    const addTocart = (id) => {
        console.log('item added', id)
    }
    return (
        <div className='user-container'>
            <h3>Name: {name}</h3>
            <p>id: {id}</p>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
            <button onClick={() => addTocart(id)} className='cart-btn'>Add to cart</button>
            
        </div>
    );
};

export default Cosmetic;