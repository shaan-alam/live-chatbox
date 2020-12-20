import { useContext } from "react";
import firebase from "firebase";
import { Context } from "../Context";

const Login = ({ history }) => {
  const { setAuthState } = useContext(Context);

  // Google OAuth
  const loginWithGoogle = (e) => {
    e.preventDefault();

    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        setAuthState({
          isAuthenticated: true,
          username: user.displayName,
          avatarSrc: user.photoURL,
        });
        // redirect to home
        history.push("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login_area">
      <div className="container">
        <h1>Sign In!! 🔥🔥🔥</h1>
        <a href="#!" onClick={loginWithGoogle}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            alt="Google Logo"
          />
          Sign in with Google
        </a>
      </div>
    </div>
  );
};

export default Login;
