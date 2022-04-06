import React, { useContext } from 'react';
import { RingContext } from '../GrandPaa/GrandPaa';

const Special = () => {
    const ring = useContext(RingContext)
    return (
        <div className='grand-paa'>
            <h3>Special</h3>
            <h3>gift: {ring} </h3>
        </div>
    );
};

export default Special;