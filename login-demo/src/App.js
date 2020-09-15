import React, { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {
    console.log("the details are");
    console.log(username);
    console.log(password);
  };
  const register = () => {
    console.log("registering");
  };

  return (
    <div>
      <h1>My Login System</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="enter username"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="enter password"
      />
      <button onClick={login}>Login</button>
      <button onClick={register}>Register</button>
    </div>
  );
}

export default App;
