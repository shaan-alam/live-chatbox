import { useEffect, useContext } from "react";
import Header from "./Header";
import Messages from "./Messages";
import Form from "./Form";
import firebase from "firebase";
import { Context } from "../Context";

const Home = ({ history }) => {
  const { setAuthState } = useContext(Context);

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
      }
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
