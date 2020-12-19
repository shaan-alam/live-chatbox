import { useContext, useState } from "react";
import Message from "./Message";
import ScrollToBottom from "react-scroll-to-bottom";
import { Context } from "../Context";

const Messages = () => {
  const { messages } = useContext(Context);

  return (
    <ul>
      <ScrollToBottom className="messages">
        {messages.map((msg) => (
          <Message key={msg.id} message={msg} />
        ))}
      </ScrollToBottom>
    </ul>
  );
};

export default Messages;
