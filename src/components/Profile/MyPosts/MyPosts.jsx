import s from '../MyPosts/MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {id: 1, post: 'Hi, how are you?Hi, how are you?11', like: 25},
        {id: 2, post: 'Its my first post!', like: 15},
    ];

    let postsElement = posts.map( p => <Post message={p.post} likeCount={p.like} />)


    return (
        <div>
            <h3>My-posts</h3>
            <div className={s.textareaBox}>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
};

export default MyPosts;