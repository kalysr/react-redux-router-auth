import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitForm } from "../../modules/auth";

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
    <div>
      <h1>{loginProcessing ? "Login..." : "Login"}</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" value={values.email} onChange={handleEmailChange} />
        <input
          type="password"
          value={values.password}
          onChange={handlePassChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
