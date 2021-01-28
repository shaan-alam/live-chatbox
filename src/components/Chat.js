const Chat = ({ user }) => {
  return (
    <div className="chat__box">
      <div className="chat__header">
        <img src={user.photoURL} alt="User avatar" />
      </div>
      <div className="chat__messages">
        <div className="chat__message">Hi</div>
      </div>
      <div className="chat__input">
        <form>
          <input type="text" placeholder="Type a message here" />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
