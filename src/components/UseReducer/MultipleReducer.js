import React, { useReducer } from 'react';

const initialState = 0

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;    
        case 'reset':
            return initialState
        default:
            return state;
    }
}

const MultipleReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
    return (
        <div className='reducer'>
            <h3>Multiple Reducer</h3>
            <h3>Count One = {count}</h3>
            <h3>Count Two = {countTwo}</h3>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <div>
                <button onClick={() => dispatchTwo('increment')}>Increment</button>
                <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
                <button onClick={() => dispatchTwo('reset')}>Reset</button>
            </div>
        </div>
    );
};

export default MultipleReducer;