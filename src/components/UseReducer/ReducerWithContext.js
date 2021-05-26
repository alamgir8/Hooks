import React, { useContext } from 'react';
import { countContext } from '../../App';

const ReducerWithContext = () => {
    const [count, dispatch] = useContext(countContext)
    return (
        <div className='reducer'>
            <h4>Use Reducer with useContext</h4>
            <h3>Count = {count}</h3>
            <button onClick={() => dispatch('increment')}>increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    );
};

export default ReducerWithContext;