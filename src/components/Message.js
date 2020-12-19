const Message = ({ message }) => {
  return (
    <li className="message">
      <p>{message.txt}</p>
    </li>
  );
};

export default Message;
