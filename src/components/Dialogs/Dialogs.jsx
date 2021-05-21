import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = ({requestDialogs, requestMessages}) => {

    let dialogsElements = requestDialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = requestMessages.map( m => <Message message={m.message} />);

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