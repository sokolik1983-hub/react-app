import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <div>
                <img src="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/19-03-2020_Unsplash_Forest.jpg/image1170x530cropped.jpg" alt="img"/>
            </div>
            <div>
                ava+desc
            </div>
            <MyPosts />
        </div>
    )
}
export default Profile;