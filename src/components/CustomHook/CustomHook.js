import React from 'react';
import useCustomHook from './useCustomHook';

const CustomHook = () => {
    const [count, increment, decrement, reset] = useCustomHook(0, 1)
    return (
        <div className='ref'>
            <h1 style={{color:'red'}}>Custom Hook</h1>
            <h3>Count = {count}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default CustomHook;