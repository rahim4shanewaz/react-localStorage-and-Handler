import React from 'react';
import { adToDb, removeFromCart } from '../../utilities/add-local-store';
import './Cosmetic.css'

const Cosmetic = ({user}) => {
    const {name, id, age, gender} = user;
    const addToCart = (id) => {
         adToDb(id);  
    }
    const removeCart = id =>{
        removeFromCart(id);
    }
    return (
        <div className='user-container'>
            <h3>Name: {name}</h3>
            <p>id: {id}</p>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
            <button onClick={() => addToCart(id)} className='cart-btn'>Add to cart</button>
            <button onClick={() => removeCart(id) } className='cart-btn'>Remove cart</button>
            
        </div>
    );
};

export default Cosmetic;