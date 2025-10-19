
import * as actions from "@/actions";

import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {getServerSession} from "next-auth";
import Profile from "@/components/Profile";
import Header from "@/components/Header";

export default async function Home() {


    const session=await  getServerSession(authOptions)

    console.log("Session data ",session)

    // const session=await  getServerSession(authOptions)

    // async  function  signOutWithOrGithub() {
    //     try {
    //         await signOut("github")
    //
    //     }catch (e) {
    //         console.log("Error")
    //     }
    // }

    return (
        <div className={`w-full  border border-4 border-red-900 mx-auto `}>
                <h3>This is a Form </h3>
                <form action={actions.signOutAction}>
                    <button className={"p-5 border border-amber-200"} type={"submit"}>Sign Out</button>
                </form>
                <Profile/>
        </div>
    );
}
