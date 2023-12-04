import { useSession, signOut } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut();
  };

 
   
  return (
    <div>
      <h1 style={{ color: "#3498db" }}>Login</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </label>
        <label>
          Password:
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{ marginLeft: "5px" }}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </label>
        <button
          type="submit"
          style={{
            backgroundColor: "#2ecc71",
            color: "#fff",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          Login
        </button>
      </form>
      {loginError && <p style={{ color: "#e74c3c" }}>{loginError}</p>}
    </div>
  );
};

export default Navbar;
