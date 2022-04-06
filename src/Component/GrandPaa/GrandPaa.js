import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/uncle';
import './GrandPaa.css'

export const RingContext = createContext('ring');

const GrandPaa = () => {



    const [house, setHouse] = useState(1);

    const ornament = 'Ornaments';

    const handleButton = () => {
        const icreaseNumber = house + 1;

        setHouse(icreaseNumber)
    }

    return (
        <RingContext.Provider value={ornament}>
            <div className='grand-paa'>
                <h2> Grand Paa</h2>
                <p>House: {house}</p><span><button onClick={handleButton}>increase</button></span>
                < section style={{ display: 'flex' }}>
                    <Father house={house} ></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section >

            </div >
        </RingContext.Provider>

    );
};

export default GrandPaa;