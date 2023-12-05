import { useSession, signOut } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>
        <h2 style={{ margin: 0, color: "#3498db" }}>IMR</h2>
      </div>
      <div style={userInfoStyle}>
        {session ? (
          <div>
            <p style={{ margin: 0, marginRight: "10px", color: "#2ecc71" }}>
              Welcome, {session.user.username}!
            </p>
            <button
              onClick={handleLogout}
              style={logoutButtonStyle}
            >
              Logout
            </button>
          </div>
        ) : (
          <p style={{ margin: 0, color: "#e74c3c" }}>Not logged in</p>
        )}
      </div>
    </nav>
  );
};

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  backgroundColor: "#333",
  color: "#fff",
};

const logoStyle = {
  flex: 1,
};

const userInfoStyle = {
  display: "flex",
  alignItems: "center",
};

const logoutButtonStyle = {
  backgroundColor: "#e74c3c",
  color: "#fff",
  border: "none",
  padding: "8px 12px",
  cursor: "pointer",
  borderRadius: "4px",
};

export default Navbar;



