// app/api/auth/[...nextauth]/route.ts

import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

// Define NextAuth options
export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // You can add more providers here
  ],
  
  // Secret for encryption
  secret: process.env.NEXTAUTH_SECRET,

  // Configure session strategy (optional)
  session: {
    strategy: "jwt",
  },

  // Callbacks (optional)
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken as string
      return session
    },
  },

  // Pages (optional)
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
  },
}

// Initialize NextAuth with the defined options
const handler = NextAuth(authOptions)

// Export GET and POST handlers for the route
export { handler as GET, handler as POST }
