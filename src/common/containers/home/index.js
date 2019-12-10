import React from "react";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome home!</p>
      <button onClick={() => dispatch(push("/about-us"))}>
        Go to about page via redux
      </button>
    </div>
  );
};

export default Home;
