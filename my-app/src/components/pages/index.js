import { useSession } from 'next-auth/react';

const Home = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
      
        <p>Welcome, {session.user.name}!</p>
      ) : (
       
        <Login />
      )}
    </div>
  );
};

export default Home;
