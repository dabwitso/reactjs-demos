import React, { useState } from "react";
import "./App.css";
import { auth } from "./Firebase";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const login = () => {
    console.log("logging in");
    auth
      .signInWithEmailAndPassword(username, password)
      .then((response) => {
        console.log("logged in");
        console.log(response);
      })
      .catch((err) => setError(err));
  };

  const register = () => {
    console.log("registering");
    auth
      .createUserWithEmailAndPassword(username, password)
      .then((response) => console.log(response))
      .catch((err) => setError(err));
  };

  return (
    <div>
      <h1>My Login System</h1>
      <input
        type="email"
        id="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="example@gmail.com"
      />
      <input
        type="password"
        id="pwd"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="enter password"
      />
      <button onClick={login}>Login</button>
      <button onClick={register}>Register</button>
      {error && <p>{error.message}</p>}
    </div>
  );
}

export default App;
