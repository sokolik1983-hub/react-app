import s from './Nav.module.css';
import {NavLink} from "react-router-dom";


const Nav = () => {
    return (
        <nav className={s.nav}>
            <div><NavLink className={s.item} to="/profile" activeClassName={s.activeLink}>Profile</NavLink></div>
            <div><NavLink className={s.item} to="/dialogs" activeClassName={s.activeLink}>Dialogs</NavLink></div>
            <div><NavLink className={s.item} to="/news" activeClassName={s.activeLink}>News</NavLink></div>
            <div><NavLink className={s.item} to="/music" activeClassName={s.activeLink}>Music</NavLink></div>
            <div><NavLink className={s.item} to="/settings" activeClassName={s.activeLink}>Settings</NavLink></div>
        </nav>
    )
};
export default Nav;