import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Speacial = () => {
    const ring = useContext(RingContext);
    
    return (
        <div>
            <h1>Speacial</h1>
            <p>Gift:{ring}</p>
        </div>
    );
};

export default Speacial;