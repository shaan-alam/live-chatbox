import { useState, useContext } from "react";
import { Context } from "../Context";

const Form = () => {
  const { handleMessages } = useContext(Context);
  const [message, setMessage] = useState("");

  const submitMessage = (e) => {
    e.preventDefault();

    // check if the message is not null
    if (message) {
      handleMessages(message);
    }
    
    setMessage("");
  };

  return (
    <form action="" onSubmit={submitMessage}>
      <input
        type="text"
        className="form-control"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message 🚀"
      />
      <button className="send_message_btn">Send</button>
    </form>
  );
};

export default Form;
