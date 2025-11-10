import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"
import {verifyUserExists} from "@/app/lib/helpers";


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
        async signIn({ user, account, profile, email, credentials }) {

            console.log("Execute 1")

            if(account?.provider==="github"|| account?.provider==="google"){

                console.log("Github User ",user)

                const newUser=await verifyUserExists(user)

                console.log("Sign in with",account)

                if(newUser!==null){

                    user.id=newUser.id

                    console.log("IN User",user)
                    console.log("User Profile ",profile)

                    if(profile && profile?.id){
                        // profile.sub=newUser.id;
                        profile.id=newUser.id;
                        // console.log("PROFILE SUB", profile.id)
                        console.log("PROFILE SUB", profile)
                    }
                }
            }

            return true
        },
        async jwt({ token, user }) {
            console.log("Execute 2")

            console.log("USER ",token)
            console.log("USER I N JWT  ",user)
            // Runs only on first login
            if (user) {
                token.id = user.id; // Use DB ID
                token.sub = user.id; // Use DB ID
            }
            return token;
        },
        async session({ session, token, user }) {

            console.log("Execute 3")

            console.log("TOKEN IN Session ",token)

            if (session && token) {

                console.log("SESSTION ",session)
                session.user.id = token.id
                console.log("Session ID ",session.user.id)
                console.log("Token  ",token)
            }

            console.log("SESSOIN OBJECT AFTER ",session)
            return session
        },
        async redirect({ url, baseUrl }) {

            console.log("Execute 4")

            // Always redirect to home page after login
            return `/`
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
