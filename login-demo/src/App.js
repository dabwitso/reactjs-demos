import React, { useState, useEffect } from "react";
import "./App.css";
import { auth } from "./Firebase";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      setUser(user);
      console.log("logged in");
    } else {
      setUser(null);
    }
  }, []);

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(username, password)
      .catch((err) => setError(err.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(username, password)
      .catch((err) => setError(err));
  };

  return (
    <div>
      <h1>My Login System</h1>
      <form>
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
        <button type="submit" onClick={login}>
          Login
        </button>
        <button type="submit" onClick={register}>
          Register
        </button>
        {error && <p>{error.message}</p>}
      </form>
    </div>
  );
}

export default App;
