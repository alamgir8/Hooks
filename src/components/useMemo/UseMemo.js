import React, { useMemo, useState } from 'react';

const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [countTwo, setCountTwo] = useState(0)

    const isEven = useMemo(() => {
        let i = 0;
        while (i< 200000000) i++
        return count % 2 === 0
    }, [count]) //useMemo use for optimized performance as like useCallback but when we need result then use useMemo and if need function then useCallback

    return (
        <div className='memo'>
            <h1 style={{color: 'red'}}>UseMemo</h1>
            <button onClick={() => setCount(count + 1)}>Count One = {count}</button>
            <span>{isEven ? 'Even' : 'Odd'}</span>
             <br />
            <button onClick={() => setCountTwo(countTwo + 1)}>Count Two = {countTwo}</button>
        </div>
    );
};

export default UseMemo;