import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = ({requestPosts}) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts requestPosts={requestPosts} />
        </div>
    )
}
export default Profile;