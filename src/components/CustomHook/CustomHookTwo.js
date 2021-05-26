import React from 'react';
import useCustomHook from './useCustomHook';

const CustomHookTwo = () => {
    const [count, increment, decrement, reset] = useCustomHook(10, 10)
    return (
        <div>
            <h2 style={{color:'red'}}>Custom Hook with dynamic</h2>
            <h3>Count = {count}</h3>
            <button onClick={increment}>Increment 10</button>
            <button onClick={decrement}>Decrement 10</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default CustomHookTwo;