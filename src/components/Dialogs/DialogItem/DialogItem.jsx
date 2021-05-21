import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    )
};

const Dialogs = () => {
    let dialogs = [
        {id: 1,name: 'Dima'},
        {id: 2,name: 'Andrey'},
        {id: 3,name: 'Nina'},
        {id: 4,name: 'Alex'},
        {id: 5,name: 'Valera'},
        {id: 6,name: 'Sonya'},
        {id: 7,name: 'Maria'}
    ];

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    return (
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
    )
};
export default DialogItem;