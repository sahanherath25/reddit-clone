"use client"

import React from 'react';

import {useSession} from "next-auth/react";

const Profile = () => {

    const {data:user,status} = useSession();


    if (status === "loading") {
        return "Loading or not authenticated..."
    }

    return (

        <div>
            <h2>You are logged in as  {user?.user.name}</h2>
        </div>
    );
};

export default Profile;