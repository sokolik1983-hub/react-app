const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_TOTAL_USERS = 'SET_TOTAL_USERS';



let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                    users: state.users.map( u => {
                        if(u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u;
                    })

                };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })

            };
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case SET_TOTAL_USERS:
            return {
                ...state,
                totalUsersCount: action.count,
            }
        default:
            return state;

    }
}


export const followActionCreator = (userId) => ({type: FOLLOW, userId})
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId})
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users})
export const setCurrentPageActionCreator = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage})
export const setTotalUsersActionCreator = (total) => ({ type: SET_TOTAL_USERS, count: total})



export default usersReducer;