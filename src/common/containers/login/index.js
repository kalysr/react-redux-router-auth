import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitForm } from "../../modules/auth";
import {
  FormGroup,
  Button,
  InputGroup,
  Intent,
  Switch,
  H3
} from "@blueprintjs/core";
import { LoginForm, LoginPageWrap } from "./styles";

const Login = () => {
  const dispatch = useDispatch();

  const loginProcessing = useSelector(({ auth }) => auth.loginProcessing);

  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const handleEmailChange = (e) =>
    setValues({ ...values, email: e.target.value });

  const handlePassChange = (e) =>
    setValues({ ...values, password: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ email: "", password: "" });
    dispatch(submitForm(values));
  };

  return (
    <LoginPageWrap>
      <LoginForm>
        <H3 align="center">Login</H3>
        <FormGroup
          disabled={loginProcessing}
          inline={false}
          label={"Email"}
          labelFor="email-input"
        >
          <InputGroup
            large={true}
            id="email-input"
            placeholder="Email address"
            disabled={loginProcessing}
            onChange={handleEmailChange}
          />
        </FormGroup>
        <FormGroup
          disabled={loginProcessing}
          inline={false}
          label={"Password"}
          labelFor="password-input"
        >
          <InputGroup
            large={true}
            id="password-input"
            placeholder="Password"
            disabled={loginProcessing}
            onChange={handlePassChange}
          />
        </FormGroup>
        <FormGroup
          disabled={loginProcessing}
          inline={false}
          labelFor="remember-input"
        >
          <Switch
            large={true}
            id="remember-input"
            label="Remember me"
            disabled={loginProcessing}
          />
        </FormGroup>
        <FormGroup disabled={loginProcessing} inline={false}>
          <Button
            large={true}
            disabled={loginProcessing}
            loading={loginProcessing}
            intent={Intent.PRIMARY}
            onClick={handleSubmit}
          >
            Sign in
          </Button>
        </FormGroup>
      </LoginForm>
    </LoginPageWrap>
  );
};

export default Login;
