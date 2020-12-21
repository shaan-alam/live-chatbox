import { useContext } from "react";
import { Context } from "../Context";
import firebase from "firebase";

const Header = () => {
  const { authState, setAuthState, setMessages } = useContext(Context);

  // logout the user and clear the auth state
  const logoutUser = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // if sign-out is successful!!
        setAuthState({
          isAuthenticated: false,
          username: null,
          avatarSrc: null,
        });

        // clear the messages here
        setMessages([]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <header>
      <h1>🔴 Live Chatbox</h1>
      <div className="user_profile">
        <p>{authState.username}</p>
        <img src={authState.avatarSrc} alt="" />
        <button className="logout_btn" onClick={logoutUser}>
          Logout!
        </button>
      </div>
    </header>
  );
};

export default Header;
