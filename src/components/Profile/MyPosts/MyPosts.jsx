import s from '../MyPosts/MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";


const MyPosts = (props) => {

    let postsElement = props.posts.map( p => <Post message={p.post} likeCount={p.like} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({ type: 'ADD-POST' });
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
    }

    return (
        <div>
            <h3>My-posts</h3>
            <div className={s.textareaBox}>
                <textarea
                    onChange={onPostChange}
                    ref={newPostElement}
                    value={props.newPostText}/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
};

export default MyPosts;