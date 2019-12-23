import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "@blueprintjs/core";
import Home from "../home";
import About from "../about";
import Login from "../login";
import PrivateRoute from "../../components/PrivateRoute";
import LoginRoute from "../../components/LoginRoute";
import { DARK_THEME } from "../../constants/index";
import "./app.scss";
import { toggleTheme } from "../../modules/theme";
import { logout } from "../../modules/auth";
import {
  NavWrapper,
  Nav,
  NavTitle,
  NavDivider,
  Heading,
  ContentWrapper,
  Page,
  NavButton,
  AppWrapper,
  AppContainer
} from "./styles";

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector(({ theme }) => theme);

  const handleChangeTheme = () => {
    dispatch(toggleTheme());
  };

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <AppWrapper className={theme === DARK_THEME ? "bp3-dark" : ""}>
      <AppContainer>
        <Switch>
          <LoginRoute exact path="/login" component={Login} redirectTo="/" />
          <Route>
            <NavWrapper>
              <Nav>
                <NavTitle>
                  <div>
                    <Heading>Kalys R</Heading>
                    <span
                      onClick={handleLogoutClick}
                      className="bp3-text-muted"
                    >
                      logout
                    </span>
                  </div>
                </NavTitle>
                <NavDivider />
                <NavButton className="bp3-text-muted">
                  <Icon icon="home" />
                  <span className="bp3-fill">
                    <Link to="/">Home</Link>
                  </span>
                  <div style={{ opacity: "50%" }}>
                    <span className="bp3-key-combo">
                      <Icon icon="key-shift" />H
                    </span>
                  </div>
                </NavButton>
                <NavDivider />
                <NavButton
                  onClick={handleChangeTheme}
                  className="bp3-text-muted"
                >
                  <Icon icon={theme === DARK_THEME ? "flash" : "moon"} />
                  <span className="bp3-fill">
                    {theme === DARK_THEME ? "Light theme" : "Dark theme"}
                  </span>
                  <div style={{ opacity: "50%" }}>
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
      </AppContainer>
    </AppWrapper>
  );
};

export default App;
