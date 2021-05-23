import s from './FriendItem.module.css';



const FriendItem = (props) => {
    return (
            <div className={s.friend} key={props.key}>
                <img src={props.img} alt="avatar"/>
                <p>{props.name}</p>
            </div>
    )
};
export default FriendItem;