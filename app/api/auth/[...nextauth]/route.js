import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "@/lib/db";
import { MongoDBAdapter } from "@auth/mongodb-adapter"

export const authOptions ={
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          })
    ],
    adapter: MongoDBAdapter(clientPromise),
};
export default NextAuth(authOptions)




/*

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
})

*/