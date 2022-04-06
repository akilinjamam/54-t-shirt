import React, { useState } from 'react';
import useTShirt from '../../hooks/teaShirt';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css';



const Home = () => {

    const [tShirts, setTShirts] = useTShirt([]);
    const [cart, setCart] = useState([])


    const handleAddToCart = (selectedTShirt) => {

        console.log(selectedTShirt, 'clicked');

        const exist = cart.find(item => item._id === selectedTShirt._id)

        if (!exist) {

            const newCart = [...cart, selectedTShirt];

            setCart(newCart);

        } else {
            alert('you can not add similar product twice')
        }


    }


    const removeItem = (selecteditem) => {

        console.log(selecteditem);

        const rest = cart.filter(item => item._id !== selecteditem._id);

        setCart(rest)


    }

    return (
        <div className='home'>
            <div className='tShirt-container'>


                {
                    tShirts.map(tShirt => <TShirt tShirt={tShirt} key={tShirt._id} handleAddToCart={() => handleAddToCart(tShirt)} ></TShirt>)
                }
            </div>

            <div className='cart-container'>

                <Cart cart={cart} removeItem={removeItem}></Cart>
            </div>
        </div>
    );
};

export default Home;