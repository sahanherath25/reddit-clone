import React from 'react';
import prisma from "../../../prisma";

const TopicShowPage =async ({params,searchParams}) => {

 const sahan=await params

 console.log("Current Search Params is ",sahan)

 const currentTopic=await prisma.topic.findFirst({})


 return (

    <div>  View Topic </div>
 );
};

export default TopicShowPage;