import s from './Profile.module.css';


const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/19-03-2020_Unsplash_Forest.jpg/image1170x530cropped.jpg" alt="img"/>
            </div>
            <div>
                ava+desc
            </div>
            <div >
                my-posts
                <div>
                    new-post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post1
                    </div>
                    <div className={s.item}>
                        post2
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;