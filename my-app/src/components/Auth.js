import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
       
        const user = { id: 1, name: 'admin', role: 'admin' };
        if (user && credentials.username === user.name && credentials.password === 'admin') {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      }
    })
  ],

});
