import React from "react";
import s from './Users.module.css';
import * as axios from "axios";
import userPhoto from "../../assets/images/usermale.png"

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1 ; i <= pagesCount; i++ ) {
            pages.push(i);
        }
        return <div>
            <div className={s.pagination}>

                {pages.map( p => {
                    return <span className={this.props.currentPage === p && s.selected} onClick={(e) => {this.onPageChanged(p)} }>{p}</span>
                })}

            </div>
            {
                this.props.users.map(u => <div className={s.user}>
                    <div className={s.leftCol}>
                        <div className={s.imgCont}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar"/>
                        </div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
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
}

export default Users;