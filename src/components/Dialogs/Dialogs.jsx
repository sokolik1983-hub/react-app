import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />);
    let messagesElements = state.messages.map( m => <Message key={m.id} message={m.message} />);

    let newMessageBody = state.newMessageBody;


    const onSendMessageClick = () => {
        props.sendMessage();
    }

    const onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div className={s.addMessageBox}>
                    <textarea value={newMessageBody}
                              onChange={onNewMessageChange}
                              placeholder='Enter your message'></textarea>
                    <button onClick={onSendMessageClick}>Add message</button>
                </div>
            </div>

        </div>

    )
};
export default Dialogs;