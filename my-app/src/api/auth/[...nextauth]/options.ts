import type {NextAuthOptions} from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { CredentialsProvider } from 'next-auth/providers/credentials'

export const options: NextAuthOptions={
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
        CredentialsProvider({
            name:" Credentials",
            credentials:{
                username:{
                    label: "Username:"
                    type: "text",
                    placeholder: "your- username",
                },
                async authorize(credentials){
                    const user = { name ="Paul", password: 'password'}

                    if (credentials.username === user.name && credentials?.password === user.password)
                    return user
                }else 
            }
        })
    ],
}