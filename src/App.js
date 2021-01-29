import { useState, useEffect } from "react";
import Chat from "./components/Chat";
import { auth } from "./firebase/config";
import firebase from "firebase";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      }
    })
  }, [])


  const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then((result) => {
      setUser(result.user);
    });
  };

  return user !== null ? (
    <Chat user={user} />
  ) : (
    <div className="login">
      <h1>Login</h1>
      <button onClick={loginWithGoogle}>Login with Google</button>
    </div>
  );
};

export default App;
