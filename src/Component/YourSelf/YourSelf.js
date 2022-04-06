import React from 'react';
import Special from '../Special/Special';

const YourSelf = ({ house }) => {
    return (
        <div>
            <h2>Me</h2>
            <p>house : {house}</p>
            <Special></Special>
        </div>
    );
};

export default YourSelf;