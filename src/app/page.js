
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {getServerSession} from "next-auth";
import Profile from "@/components/Profile";
import React from "react";
import TopicsCreateForm from "@/components/topics/TopicsCreateForm";


export default async function Home() {

    return (

        <div className={"w-full grid grid-cols-4 grid-4 p-4 border-4 border-red-900 mx-auto"}>

            <div className="col-span-3 bg-red-300">
                <h1 className={"text-xl m-2"}>Top Post</h1>
            </div>

            <div>
                <TopicsCreateForm/>


            </div>


        </div>

    );
}


