import React, { useEffect, useState } from 'react';

const Clock = () => {
    const initialSecond = 0;
    const initialMinute = 0;
    const initialHour = 0;
    const [second, setSecond] = useState(initialSecond);
    const [minute, setMinute] = useState(initialMinute);
    const [hour, setHour] = useState(initialHour)
    
    

    if (second === 60) {
        setMinute(minute + 1)
        setSecond(initialSecond);
    }
    if (minute === 60) {
        setHour(hour + 1)
        setMinute(initialMinute)
    }

    useEffect(() => {
        const tick = () => {
            setSecond(second + 1)
            // setSecond(preSecond => preSecond + 1) if we do this way then no need to added dependency on useEffect array
        }
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval)
        }
        
    }, [second])
    return (
        <div className='clock'>
            <h1>Clock</h1>
            <h2>{hour} H : {minute} M : {second} S </h2>

        </div>
    );
};

export default Clock;