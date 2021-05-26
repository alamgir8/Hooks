import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Your Title Change ${count} Times`
    }, [count])
    return (
        <div className='effect'>
            <h1 style={{color: 'red'}}>UseEffect Example</h1>
            <button onClick={() => setCount(count + 1)}>Change Title</button>
        </div>
    );
};

export default UseEffect;