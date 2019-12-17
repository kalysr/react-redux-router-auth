import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../home";
import About from "../about";
import Login from "../login";
import PrivateRoute from "../../components/PrivateRoute";
import LoginRoute from "../../components/LoginRoute";
import { DARK_THEME } from "../../constants/index";
import "./app.scss";

const App = () => {
  const { isAuthenticated, theme } = useSelector(({ auth, theme }) => ({
    theme,
    isAuthenticated: auth.isAuthenticated
  }));
  return (
    <div className={theme === DARK_THEME ? "App bp3-dark" : "App"}>
      <Switch>
        <LoginRoute exact path="/login" component={Login} redirectTo="/" />
        <Route>
          <header>
            {!isAuthenticated && <Link to="/login">Login</Link>}
            <Link to="/">Home</Link>
            <Link to="/about-us">About</Link>
          </header>
          <main>
            <PrivateRoute exact path="/" component={Home} redirectTo="login" />
            <Route exact path="/about-us" component={About} />
          </main>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
