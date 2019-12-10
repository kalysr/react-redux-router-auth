import React from "react";
import { Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../home";
import About from "../about";
import Login from "../login";
import PrivateRoute from "../../components/PrivateRoute";
import LoginRoute from "../../components/LoginRoute";

const App = () => {
  const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);
  return (
    <div>
      <header>
        {!isAuthenticated && <Link to="/login">Login</Link>}
        <Link to="/">Home</Link>
        <Link to="/about-us">About</Link>
      </header>

      <main>
        <PrivateRoute exact path="/" component={Home} redirectTo="login" />
        <Route exact path="/about-us" component={About} />
        <LoginRoute exact path="/login" component={Login} redirectTo="/" />
      </main>
    </div>
  );
};

export default App;
