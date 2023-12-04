import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      handleLogin("admin");
    } else {
      handleLogin("user");
    }
  };

  return (
    <div>
      <h1 style={{ color: "#3498db" }}>Login</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" 
          style={{
            backgroundColor: "#2ecc71",
            color: "#fff",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }} >Login</button>
      </form>
    </div>
  );
};

export default Login;
