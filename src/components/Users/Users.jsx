import React from "react";
import s from './Users.module.css';
import userPhoto from "../../assets/images/usermale.png"
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {toggleIsFollowingProgress} from "../../redux/usersReducer";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1 ; i <= pagesCount; i++ ) {
        pages.push(i);
    }
        return <div>
            <div className={s.pagination}>

                {pages.map( p => {
                    return <span className={props.currentPage === p && s.selected} onClick={(e) => {props.onPageChanged(p)} }>{p}</span>
                })}

            </div>
            {
                props.users.map(u => <div className={s.user}>
                    <div className={s.leftCol}>
                        <div className={s.imgCont}>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar"/>
                            </NavLink>



                        </div>

                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleIsFollowingProgress(true,u.id)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY' : 'b78bd55f-107c-4a94-ba2e-94a1aac79ca7',
                                    },
                                }).then(response => {
                                    if(response.data.resultCode == 0) {
                                        props.unfollow(u.id)
                                    }
                                    props.toggleIsFollowingProgress(false,u.id)
                                });

                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleIsFollowingProgress(true,u.id)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY' : 'b78bd55f-107c-4a94-ba2e-94a1aac79ca7',
                                    },
                                }).then(response => {
                                    if(response.data.resultCode == 0) {
                                        props.follow(u.id)
                                    }
                                    props.toggleIsFollowingProgress(false, u.id)
                                });



                            }}>Follow</button>}


                    </div>
                    <div className={s.rightCol}>
                        <div className={s.infoBox}>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
}



export default Users;