import React from 'react';
import './TShirt.css';

const TShirt = (props) => {
    const { handleAddToCart, tShirt } = props
    const { picture, name, price, } = tShirt
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <p>name: {name}</p>
            <p>price : {price} </p>
            <button onClick={() => handleAddToCart(tShirt)}>click</button>
        </div>
    );
};

export default TShirt;