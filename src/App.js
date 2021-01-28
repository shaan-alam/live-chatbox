import { useState } from "react";
import Chat from "./components/Chat";
import { auth } from "./firebase/config";
import firebase from "firebase";

const App = () => {
  const [user, setUser] = useState(null);

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
      <button onClick={loginWithGoogle}>Login with Google</button>
    </div>
  );
};

export default App;
