import React from "react";
import s from './Users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers (
            [
                {id: 1, photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/1200px-Patrick_Star.svg.png', followed: true, fullName: 'Dima', status: 'Work', location: {city: 'Minsk', country: 'Russia'}},
                {id: 2, photo: 'https://www.techinn.com/f/13767/137677730/funko-sanrio-hello-kitty-swt-trt.jpg', followed: false, fullName: 'Andrey', status: 'Boss', location: {city: 'Moscow', country: 'Russia'}},
                {id: 3, photo: 'https://upload.wikimedia.org/wikipedia/ru/thumb/4/49/%D0%9D%D1%83%2C_%D0%BF%D0%BE%D0%B3%D0%BE%D0%B4%D0%B8%21_%28%D0%B2%D1%8B%D0%BF%D1%83%D1%81%D0%BA_8%29.jpg/274px-%D0%9D%D1%83%2C_%D0%BF%D0%BE%D0%B3%D0%BE%D0%B4%D0%B8%21_%28%D0%B2%D1%8B%D0%BF%D1%83%D1%81%D0%BA_8%29.jpg', followed: true, fullName: 'Nina', status: 'Boss of the Boss', location: {city: 'Kiev', country: 'Ukraine'}},
                {id: 4, photo: 'https://i.pinimg.com/originals/ee/fa/54/eefa54fbe930758a9e6139416e5001b3.png', followed: false, fullName: 'Alex', status: 'front', location: {city: 'Minsk', country: 'USA'}},
                {id: 5, photo: 'https://icdn.lenta.ru/images/2020/02/21/11/20200221114146556/square_320_97d5a60acfed574762d123af415e544c.jpg', followed: true, fullName: 'Valera', status: 'Lucky day!', location: {city: 'Minsk', country: 'France'}},
                {id: 6, photo: 'https://bestcube.space/wp-content/uploads/mem-s-bagz-banni.jpg', followed: false, fullName: 'Sonya', status: 'Good for you', location: {city: 'Minsk', country: 'England'}},
                {id: 7, photo: 'https://i20.kanobu.ru/r/b188fad740a9253139e3a80da15a2f0a/1040x-/u.kanobu.ru/editor/images/72/b9f7aa05-1163-4718-8699-1fb190b7004c.png', followed: true, fullName: 'Maria', status: 'Morning!', location: {city: 'Minsk', country: 'New Zeland'}}
            ]
        );
    };

    return <div>
        {
            props.users.map(u=> <div className={s.user}>
                <div className={s.leftCol}>
                    <div className={s.imgCont}>
                        <img src={u.photo} alt="avatar"/>
                    </div>
                    { u.followed
                        ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                        : <button onClick={() => { props.follow(u.id) }}>Follow</button> }


                </div>
                <div className={s.rightCol}>
                    <div className={s.infoBox}>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </div>
                </div>
            </div>)
        }
    </div>
}

export default Users;