import firebase from "firebase";
import { createContext, useState, useEffect } from "react";
import { db } from "./firebase";
export const Context = createContext({});

export default function ContextProvider({ children }) {
  const [messages, setMessages] = useState([]);
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    username: null,
    avatarSrc: null,
  });

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            txt: doc.data().txt,
            userAvatarSrc: doc.data().userAvatarSrc,
          }))
        );
      });
  }, []);

  const handleMessages = (message) => {
    db.collection("messages").add({
      txt: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      userAvatarSrc: authState.avatarSrc,
    });
  };

  return (
    <Context.Provider
      value={{ messages, handleMessages, authState, setAuthState }}
    >
      {children}
    </Context.Provider>
  );
}
