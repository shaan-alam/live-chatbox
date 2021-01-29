import { useState, useEffect, useRef } from "react";
import { db } from "../firebase/config";
import firebase from "firebase";
import "./Chat.css";
import Message from "./Message";
import ScrollToBottom from "react-scroll-to-bottom";

const Chat = ({ user }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
  }, []);

  const sendMessages = (e) => {
    e.preventDefault();

    const newMessage = {
      message: input,
      user: { displayName: user.displayName, photoURL: user.photoURL },
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    };

    db.collection("messages").add(newMessage);

    setInput("");

    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="chat__box">
      <div className="chat__header">
        <img src={user.photoURL} alt="User avatar" />
        <p>{user.displayName}</p>
      </div>
      <div className="chat__messages">
        {/* <ScrollToBottom className="messages"> */}
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        <div
          ref={scrollRef}
          style={{ float: "left", clear: "both", paddingTop: "4rem" }}
        ></div>
        {/* </ScrollToBottom> */}
      </div>
      <div className="chat__input">
        <form onSubmit={sendMessages}>
          <input
            type="text"
            placeholder="Type a message here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button>&rarr;</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
