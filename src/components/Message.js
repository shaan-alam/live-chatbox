
import "./Message.css";

const Message = ({ message }) => {
  return (
    <div className="chat__message">
      <img src={message.user.photoURL} alt="User avatar" />
      <p>{message.message}</p>
    </div>
  );
};

export default Message;
 