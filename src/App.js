import Home from "./components/Home";
import Login from "./components/Login";
// import PrivateRoute from "./PrivateRoute";
import "./styles/styles.scss";

import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/home" component={Home} />
    </Switch>
  );
};

export default App;
