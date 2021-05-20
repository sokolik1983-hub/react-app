import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

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
    let messages = [
        {id: 1,message: 'How are you?!'},
        {id: 2,message: 'Hi!'},
        {id: 3,message: 'Speak english!Speak english!'},
    ];


    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map( m => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>

    )
};
export default Dialogs;