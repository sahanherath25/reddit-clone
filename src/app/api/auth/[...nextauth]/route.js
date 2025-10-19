import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"


export const authOptions = {
    // Configure one or more authentication providers
    providers:
        [
            // TODO For Oauth with Github
            GithubProvider({
                clientId: process.env.GITHUB_CLIENT_ID,
                clientSecret: process.env.GITHUB_CLIENT_SECRET,
                authorization:{
                    params:{scope:"read:user user:email"}
                }
            }),
    ],
    secret:process.env.NEXTAUTH_SECRET,

    callbacks:{
        async session({ session, token, user }) {
            return session
        },
        async redirect({ url, baseUrl }) {
            // Always redirect to home page after login
            return `/`
        },
        async signIn({ user, account, profile, email, credentials }) {

            if(account?.provider==="github"|| account?.provider==="google"){

                console.log("Sign in with",account)
            }

            return true
        }
    },
    // 👇 Add this
    pages: {
        signIn: "/signin",
    },
}

export const handler=NextAuth(authOptions)

// console.log("Hander obj ",handlers)

export  { handler as GET,handler as  POST}
