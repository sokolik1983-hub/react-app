import React from "react";
import s from './Users.module.css';
import userPhoto from "../../assets/images/usermale.png"


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
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar"/>
                        </div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
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