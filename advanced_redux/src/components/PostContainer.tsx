import React, {useEffect, useState} from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";
import {async} from "q";
import {IPost} from "../models/IPost";

const PostContainer = () => {
    const [limit, setLimit] = useState(100)
    const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit)
    const [createPost, {}] = postAPI.useCreatePostMutation()
    useEffect(() => {
        // setTimeout(() => {
        //     setLimit(3)
        // }, 2000)
    }, [])

    const handlerCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    return (
        <div>
            <div className="post__list">
                <button onClick={handlerCreate}>Add new post</button>
                {/*<button onClick={() => refetch()}>REFETCH</button>*/}
                {isLoading && <h1>Loading.....</h1>}
                {error && <h1>Error</h1>}
                {posts && posts.map(post =>
                    <PostItem post={post}/>
                )}
            </div>
        </div>
    );
};

export default PostContainer;