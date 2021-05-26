import React, { useEffect, useState } from 'react';

const FetchData = () => {
    const [id, setId] = useState(1);
    const [idFromBt, setIdFromBtn] = useState(1)
    const [post, setPost] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${idFromBt}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setPost(data)
        })
    },[idFromBt])

    const handleClick = () => {
        setIdFromBtn(id)
    }
    return (
        <div className='fetchData'>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)}/><br/>
            <button type='button' onClick={handleClick}>Get Post</button>
            <h3>{post.title}</h3>
        </div>
    );
};

export default FetchData;