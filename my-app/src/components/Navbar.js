import { useSession, signOut } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <nav>
      <div>
        <h2>IMR</h2>
      </div>
      <div>
        {session ? (
          <div>
            <p>Welcome, {session.user.username}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <p>Not logged in</p>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
