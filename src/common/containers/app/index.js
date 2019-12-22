import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { Icon } from "@blueprintjs/core";
import Home from "../home";
import About from "../about";
import Login from "../login";
import PrivateRoute from "../../components/PrivateRoute";
import LoginRoute from "../../components/LoginRoute";
import { DARK_THEME } from "../../constants/index";
import "./app.scss";
import {
  NavWrapper,
  Nav,
  NavTitle,
  NavDivider,
  Heading,
  ContentWrapper,
  Page,
  NavButton
} from "./styles";

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
          <NavWrapper>
            <Nav>
              <NavTitle>
                <div>
                  <Heading>Kalys R</Heading>
                  <span className="bp3-text-muted">test</span>
                </div>
              </NavTitle>
              <NavDivider />
              <NavButton className="bp3-text-muted">
                <Icon icon="home" />
                <span className="bp3-fill">
                  <Link to="/">Home</Link>
                </span>
                <div>
                  <span className="bp3-key-combo">
                    <Icon icon="key-shift" />H
                  </span>
                </div>
              </NavButton>
              <NavDivider />
              <NavButton className="bp3-text-muted">
                <Icon icon="flash" />
                <span className="bp3-fill">Light theme</span>
                <div>
                  <span className="bp3-key-combo">
                    <Icon icon="key-shift" />D
                  </span>
                </div>
              </NavButton>
              <NavDivider />
            </Nav>
          </NavWrapper>
          <ContentWrapper>
            <Page>
              <PrivateRoute
                exact
                path="/"
                component={Home}
                redirectTo="login"
              />
              <Route exact path="/about-us" component={About} />
            </Page>
          </ContentWrapper>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
