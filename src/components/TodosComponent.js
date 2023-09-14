import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsUsingAxios } from './redux/actions';

const PostList = () => {
    const dispatch = useDispatch();
    const { loading, title } = useSelector((state) => state.post );

    const handleFetch = ()=>{
        dispatch(fetchPostsUsingAxios());
    }
    // useEffect(() => {
    //     dispatch(fetchPostsUsingAxios());
    //   }, [dispatch]);

    return (
        <div>
            <button onClick={handleFetch}>Fetch</button>
            {loading ? (<p>Loading...</p>) : (
                <table style={{border : "1px solid black"}}>
                { title.length > 0 && (
                <thead style={{ border: '1px solid black'}}>
                    <tr style={{ border: '1px solid black'}}>
                        <th  style={{ border: '1px solid black'}}>ID</th>
                        <th  style={{ border: '1px solid black'}}>User ID</th>
                        <th  style={{ border: '1px solid black'}}>Title</th>
                    </tr>
                </thead>
                    )}
                <tbody>
                    {title.map((post) => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.userId}</td>
                            <td>{post.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            )}
        </div>
    );
};

export default PostList;