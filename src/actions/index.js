"use server"

import {signIn, signOut} from "next-auth/react";

export async function signInWithGithub() {
    try {
         return  signIn("github")

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