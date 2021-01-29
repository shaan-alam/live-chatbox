import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import "./Chat.css";

const Chat = ({ user }) => {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    
  }, [])

  return (
    <div className="chat__box">
      <div className="chat__header">
        <img src={user.photoURL} alt="User avatar" />
        <p>{user.displayName}</p>
      </div>
      <div className="chat__messages">
        <div className="chat__message">
          <img src={user.photoURL} alt="User avatar" />
          <p>Hi!!</p>
        </div>
      </div>
      <div className="chat__input">
        <form>
          <input type="text" placeholder="Type a message here" />
          <button>&rarr;</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
