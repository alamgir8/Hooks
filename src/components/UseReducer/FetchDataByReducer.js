import React, { useEffect, useReducer } from 'react';


const initialState = {
    loading : true,
    error : '',
    post : {}
    
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading : false,
                post : action.payload,
                error : ''
            }
        case 'FETCH_ERROR':
            return {
                loading : false,
                post : {},
                error : "Something went wrong !"
            }    
        default:
           return state;
    }
}
const FetchDataByReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
  

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => res.json())
        .then(data => {
            dispatch({
                type : 'FETCH_SUCCESS',
                payload : data
            })
        })
        .catch(error => {
            dispatch({
                type : 'FETCH_ERROR'
            })
        } )
    }, [])
    return (
        <div>
            {
                state.loading ? "Loading data..." : state.post.title
            }
            {
                state.error ? state.error : null
            }
        </div>
    );
};

export default FetchDataByReducer;