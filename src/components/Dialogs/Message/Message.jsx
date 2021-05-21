import s from './Message.module.css';
import {NavLink} from "react-router-dom";



const Message = (props) => {
    let messages = [
        {id: 1,message: 'How are you?!'},
        {id: 2,message: 'Hi!'},
        {id: 3,message: 'Speak english!Speak english!'},
    ];
    let messagesElements = messages.map( m => <Message message={m.message} />);

    return (
        <div className={s.message}>{messagesElements}</div>
    )
}

export default Message;