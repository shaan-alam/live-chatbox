import firebase from "firebase";
import { createContext, useState, useEffect } from "react";
import { db } from "./firebase";
export const Context = createContext({});

export default function ContextProvider({ children }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, txt: doc.data().txt }))
        );
      });
  }, []);

  const handleMessages = (message) => {
    db.collection("messages").add({
      txt: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // setMessages([...messages, message]);
  };

  return (
    <Context.Provider value={{ messages, handleMessages }}>
      {children}
    </Context.Provider>
  );
}
