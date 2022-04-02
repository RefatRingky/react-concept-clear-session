import React from 'react';
import Speacial from '../Speacial/Speacial';

const Myself = ({house}) => {
    return (
        <div>
            <h4>Myself</h4>
            <p>House:{house}</p>
            <Speacial></Speacial>
        </div>
    );
};

export default Myself;