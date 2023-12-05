import React, { useState } from "react";
import { signIn } from 'next-auth/react';
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
    <div style={{ backgroundColor: "#1a1a1a", padding: "20px", color: "#3498db" }}>
      <h1>Login</h1>
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
        <button
          type="submit"
          style={{
            backgroundColor: "#3498db",
            color: "#ff0", 
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            transition: "background-color 0.3s ease", 
          }}
         
          onMouseOver={(e) => (e.target.style.backgroundColor = "#2ecc71")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#3498db")}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
