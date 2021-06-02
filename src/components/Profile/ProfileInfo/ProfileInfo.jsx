import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/preloader";



const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img className={s.bg} src="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/19-03-2020_Unsplash_Forest.jpg/image1170x530cropped.jpg" alt="img"/>
            </div>
            <div className={s.descBlock}>
                <div className={s.avatar_wrap}>
                    <img className={s.avatar} src={props.profile.photos.large} alt="avatar"/>
                </div>
                <h1 className={s.name_h1}>{props.profile.fullName}</h1>
                <h2 className={s.status_h2}>{props.profile.aboutMe}</h2>
            </div>
        </div>
    )
}
export default ProfileInfo;