import React, { useReducer } from 'react';
import FetchDataByReducer from './FetchDataByReducer';
import MultipleReducer from './MultipleReducer';
import ReducerWithContext from './ReducerWithContext';

const initialState = {
    counterOne : 0,
    counterTwo : 10
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, counterOne: state.counterOne + action.value};
        case 'decrement':    
            return { ...state, counterOne: state.counterOne - action.value};
        case 'increment2':
            return { ...state, counterTwo: state.counterTwo + action.value};
        case 'decrement2':    
            return {...state, counterTwo: state.counterTwo - action.value};
        case 'reset':
            return initialState;    
        default:
            return state;
    }
}

const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div className='reducer'>
            <h1 style={{color: 'red'}}>UseReducer</h1>
            <h3>CounterOne = {count.counterOne}</h3>
            <h3>CounterTwo = {count.counterTwo}</h3>
            <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
            <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment 5</button>
            <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement 5</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            <div>
            <button onClick={() => dispatch({type: 'increment2', value: 1})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement2', value: 1})}>Decrement</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            </div>
            <MultipleReducer/>
            <ReducerWithContext/>
            <FetchDataByReducer/>
        </div>
    );
};

export default UseReducer;