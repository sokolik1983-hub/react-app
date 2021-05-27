import s from './Friends.module.css';
import FriendItem from "./FriendItem/FriendItem";
import React from "react";
import store from "../../../redux/reduxStore";





const Friends = () => {
    let state = store.getState().friends;
    let friendsElements = state.map(f => <FriendItem key={f.id} name={f.name} img={f.img} />)

    return (
        <div className={s.friendsCont}>
            <h3>Друзья онлайн</h3>
            {friendsElements}
        </div>
    )
};
export default Friends;