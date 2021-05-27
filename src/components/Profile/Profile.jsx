import s from './Profile.module.css';
import MyPostsCont from "./MyPosts/MyPostsCont";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPostsCont />
        </div>
    )
}
export default Profile;