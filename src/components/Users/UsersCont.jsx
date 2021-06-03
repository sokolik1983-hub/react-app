import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setUsers,
    unfollow,
    setCurrentPage,
    setTotalUsers,
    toggleIsFetching,
    toggleIsFollowingProgress
} from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/preloader";
import {userAPI} from "../../API/API";


class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.toggleIsFetching(true);

        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsers(data.totalCount);
        });
    }

    onPageChanged = (p) => {

        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(p);

        userAPI.getUsers(p , this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });
    }

    render() {

        return <>

            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


let mapStateToProps = (state) =>
{

    return {

        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }

}
// let mapDispatchToProps = (dispatch) =>
// {
//     return {
//         follow: (userId) => {
//             dispatch(followActionCreator(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowActionCreator(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersActionCreator(users))
//         },
//         setCurrentPage: (pageNum) => {
//             dispatch(setCurrentPageActionCreator(pageNum))
//         },
//         setTotalUsersCount: (total) => {
//             dispatch(setTotalUsersActionCreator(total))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingActionCreator(isFetching))
//         }
//     }
// }
export default connect(mapStateToProps,{follow, unfollow, setUsers, setCurrentPage, setTotalUsers, toggleIsFetching, toggleIsFollowingProgress})(UsersContainer);
