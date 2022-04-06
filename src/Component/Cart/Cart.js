import React from 'react';
import './Cart.css'


const Cart = ({ cart, removeItem }) => {

    // conditional renderring
    // 1. element variable
    // 2.ternery operator
    // && and operator

    let command;

    if (cart.length === 0) {
        command = <p> please add some items </p>
    } else {

        command = <p>add more items</p>
    }


    return (
        <div>
            <h2>selected cart : {cart.length}</h2>
            {
                cart.map(tShirt => <p>
                    {tShirt.name}

                    <button onClick={() => removeItem(tShirt)}>clear</button>

                </p>)

            }

            {command}
            {cart.length === 0 || <div className='orange'>
                <h2> i will vanish if you are 0</h2>
            </div>}
            {cart.length === 3 && <div className='orange'>
                <h2>triangal</h2>
                <p>this till 3</p>

            </div>}
            {cart.length !== 4 ? <p>keep adding</p> : <button>clear all</button>}
            {cart.length === 4 && <div>

                <button className='orange'>review item</button>

            </div>}
        </div>

    );
};

export default Cart;