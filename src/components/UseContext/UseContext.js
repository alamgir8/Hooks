import React, { useContext } from 'react';
import { nameContext, workContext } from '../../App';

const UseContext = () => {
    const name = useContext(nameContext);
    const job = useContext(workContext);
    return (
        <div className='context'>
            <h1 style={{color: 'red'}}>UseContext Example</h1>
            <h4>My name is {name}</h4>
            <h4>I'm a {job}</h4>
        </div>
    );
};

export default UseContext;