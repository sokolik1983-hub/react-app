import s from './Friends.module.css';
import FriendItem from "./FriendItem/FriendItem";


const Friends = (props) => {

    let friendsElements = props.state.map(f => <FriendItem name={f.name} img={f.img}  />)

    return (
        <div className={s.friendsCont}>
            <h3>Друзья онлайн</h3>
            {friendsElements}
        </div>
    )
};
export default Friends;