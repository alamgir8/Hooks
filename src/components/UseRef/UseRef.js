import React, { useEffect, useRef, useState } from 'react';

const UseRef = () => {
    const inputRef = useRef(null);
    const intervalRef = useRef()
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(preInterval => preInterval + 1)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [intervalRef])

    useEffect(() => {
        console.log(inputRef.current.focus());
    }, [])
    return (
        <div className='ref'>
            <h1 style={{color: 'red'}}>UseRef</h1>
            <input ref={inputRef} type="text" /><br /><br />
            <h4>Interval = {timer}</h4>
            <button onClick={() => clearInterval(intervalRef.current)}>Clear Interval</button>
        </div>
    );
};

export default UseRef;