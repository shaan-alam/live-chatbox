const Message = ({ message }) => {
  return (
    <li className="message">
      <img src={message.userAvatarSrc} alt="" />
      <p>{message.txt}</p>
    </li>
  );
};

export default Message;
