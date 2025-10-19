"use client"
import React from 'react';

import * as actions from "@/actions/index"
import {useSession} from "next-auth/react";
import Link from "next/link";

const Page = () => {

    const {data:session,status} = useSession()

    console.log("Session", session)

    if (status === "authenticated") {
        return <p>Signed in as {session.user.email}</p>
    }else {



        return <Link href="/signin">Sign in</Link>
    }



    return (


        <div>
            <button className={"p-5 border border-amber-200"} type={"submit"} onClick={actions.signOutAction}>Sign Out
            </button>
        </div>
    );
};

export default Page;