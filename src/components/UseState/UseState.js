import React, { useState } from 'react';
import DataFetch from './DataFetch';

const UseState = () => {
    const initialValue = 0;
    const initialItem = [];
    const [count, setCount] = useState(initialValue);
    const [name, setName] = useState({firstName : '', lastName : ''});
    const [items, setItems] = useState(initialItem)


    const incrementTen = () => {
        for (let i = 0; i < 10; i++) {
            setCount(preCount => preCount + 1)      
        }
    }

    const addItems = () => {
        setItems ([...items, {
            id  : items.length,
            value : Math.floor(Math.random() * 10 + 1)
        }])
    }
    return (
        <div className='useState'>
            <h1 style={{color: 'red'}}>UseState Example</h1>
            <h3>Count = {count}</h3>
            <button onClick={() => setCount(initialValue)}>Reset</button>
            <button onClick={() => setCount(preCount => preCount + 1)}>Increase</button>
            <button onClick={() => setCount(preCount => preCount - 1)}>Decrease</button>
            <button onClick={incrementTen}>Increase 10</button> <br /><br />
            <input type="text" value={name.firstName} onChange={(e) => setName({...name, firstName : e.target.value})} />
            <input type="text" value={name.lastName}  onChange={(e) => setName({...name, lastName : e.target.value})}/>
            <h3>Your firstName is {name.firstName}</h3>
            <h3>Your lastName is {name.lastName}</h3><br />
            {/* <h4>{JSON.stringify(name)}</h4> */}
            <button onClick={addItems}>Add Items</button>
            <button onClick={() => setItems(initialItem)}>Reset Item</button>
            <ul>
                {
                    items.map(item => 
                        <h3 key={item.id}>{item.value}</h3>
                        )
                }
            </ul>
            <br />
            <div>
                <DataFetch/>
            </div>

        </div>
    );
};

export default UseState;