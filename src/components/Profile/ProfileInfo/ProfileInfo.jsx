import s from './ProfileInfo.module.css';



const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/19-03-2020_Unsplash_Forest.jpg/image1170x530cropped.jpg" alt="img"/>
            </div>
            <div className={s.descBlock}>
                ava+desc
            </div>
        </div>
    )
}
export default ProfileInfo;