import { useEffect, useContext } from "react";
import Header from "./Header";
import Messages from "./Messages";
import Form from "./Form";
import firebase from "firebase";
import { Context } from "../Context";
import { db } from "../firebase";

const Home = ({ history }) => {
  const { setMessages, setAuthState } = useContext(Context);

  // stay logged in if the page is refreshed
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuthState({
          isAuthenticated: true,
          username: user.displayName,
          avatarSrc: user.photoURL,
        });
      } else {
        setAuthState({
          isAuthenticated: false,
          username: null,
          avatarSrc: null,
        });
        history.push("/");
      }
    });
  }, []);

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

  return (
    <div className="home">
      <Header />
      <Messages />
      <Form />
    </div>
  );
};

export default Home;
