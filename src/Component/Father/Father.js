import React from 'react';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';
import YourSelf from '../YourSelf/YourSelf';

const Father = ({ house }) => {
    return (
        <div>
            <h2>Father</h2>
            <p>house: {house}</p>
            <div style={{ display: 'flex' }}>
                <YourSelf house={house}></YourSelf>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>

        </div>
    );
};

export default Father;