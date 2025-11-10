

import {signIn, signOut} from "next-auth/react";

export async function signUserIn() {
    try {
         return  signIn("github")

    }catch (e) {
        console.log("Error",e)
    }
}
export async function signUserOut() {
    try {
         return  signOut()

    }catch (e) {
        console.log("Error",e)
    }
}

export async function signInOutOrGithub() {
    try {
        await signOut()

    }catch (e) {
        console.log("Error",e)
    }
}

export async function signOutAction() {

    try {
        await signOut({ redirectTo: "/signin" });
    } catch (e) {
        console.error("SignOut error:", e);
    }
}


export {createTopic}from "./create-topic"
export {createPost}from "./create-post"