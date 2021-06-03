import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="http://pngimg.com/uploads/lamborghini/lamborghini_PNG10709.png" alt="logo"/>
            <div className={s.loginBlock}>
                { props.isAuth ? <p>{props.login}</p>
                   : <NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </header>
    )
};
export default Header;