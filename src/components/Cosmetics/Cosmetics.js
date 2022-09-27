import React from 'react';
import { calculation } from '../../utilities/Calculation';
import Cosmetic from '../cosmetic/Cosmetic';
import './Cosmetics.css'

const Cosmetics = () => {
    const first = 55;
    const second = 23;
    const result = calculation(first, second);
    const users = [
        {
          "id": "63333f4da6df70b74e1373d9",
          "picture": "http://placehold.it/32x32",
          "age": 27,
          "name": "Kelleys Powells",
          "gender": "male"
        },
        {
          "id": "63333f4d3a42bf47ac3df788",
          "picture": "http://placehold.it/32x32",
          "age": 36,
          "name": "Letha Lloyd",
          "gender": "female"
        },
        {
          "id": "63333f4dc0a6d10e7b238aa2",
          "picture": "http://placehold.it/32x32",
          "age": 24,
          "name": "Rosanna Workman",
          "gender": "female"
        },
        {
          "id": "63333f4d2c59a3c82f1ca5f8",
          "picture": "http://placehold.it/32x32",
          "age": 37,
          "name": "Nellie Knowles",
          "gender": "female"
        },
        {
          "id": "63333f4dad6e4469837b0077",
          "picture": "http://placehold.it/32x32",
          "age": 35,
          "name": "Marta Bowen",
          "gender": "female"
        },
        {
          "id": "63333f4d7f5ddf091fd78675",
          "picture": "http://placehold.it/32x32",
          "age": 30,
          "name": "Reba Gregory",
          "gender": "female"
        }
      ]
    return (
        <div>
            <h1>From cosmetics components</h1>
            <div className='cosmetics-container'>
            
            {/* <p>{result}</p> */}
            {
                users.map(user => <Cosmetic key={user.id}
                                            user = {user}
                                            name={user.name}
                                            age={user.age} 
                                            id={user.id} 
                                            gender={user.gender} 
                                            ></Cosmetic> )
            }
            </div>
            
        </div>
    );
};

export default Cosmetics;