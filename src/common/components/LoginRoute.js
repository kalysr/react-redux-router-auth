import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function LoginRoute({ redirectTo, component: Component, ...rest }) {
  const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={redirectTo} />
        )
      }
    />
  );
}

export default LoginRoute;
