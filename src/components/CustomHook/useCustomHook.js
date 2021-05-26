import { useState } from 'react';

const useCustomHook = (initialValue = 0, value) => {
    const [count, setCount] = useState(initialValue, value);

    const increment = () => {
        setCount(preCount => preCount + value)
    }
    const decrement = () => {
        setCount(preCount => preCount - value)
    }
    const reset = () => {
        setCount(initialValue)
    }
    return [count, increment, decrement, reset]
};

export default useCustomHook;