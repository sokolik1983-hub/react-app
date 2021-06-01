import s from './Users.module.css';
import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator, setCurrentPageActionCreator, setTotalUsersActionCreator} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (pageNum) => {
            dispatch(setCurrentPageActionCreator(pageNum))
        },
        setTotalUsersCount: (total) => {
            dispatch(setTotalUsersActionCreator(total))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);