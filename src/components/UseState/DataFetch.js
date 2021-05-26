import React, { useEffect, useState } from 'react';

const DataFetch = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({})

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/10')
        .then(res => res.json())
        .then(data => {
            setLoading(false);
            setPost(data)
            setError('')
        })
        .catch(error => {
            setLoading(false);
            setPost({})
            setError('Something went wrong!')
        })
    }, [])
    return (
        <div>
            {
                loading ? 'Loading data....' : post.title
            }
            {
                error ? error : null
            }
    
            
        </div>
    );
};

export default DataFetch;