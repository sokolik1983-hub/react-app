import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://st.depositphotos.com/1003492/1259/v/600/depositphotos_12592825-stock-illustration-circus-seal.jpg" alt="avatar"/>
            {props.message}
            <div>
                <span>likes = {props.likeCount}</span>
            </div>
        </div>
    )
};

export default Post;

