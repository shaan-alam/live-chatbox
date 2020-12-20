import { useContext } from "react";
import { Context } from "./Context";
import { Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component }) => {
  const { authState } = useContext(Context);

  return authState.isAuthenticated ? (
    <Component />
  ) : (
    <Redirect to={{ pathname: "/" }} />
  );
};

export default PrivateRoute;
