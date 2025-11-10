import React from 'react';
import prisma from "../../../prisma";
import Link from "next/link";
import paths from "@/paths";
import { ChevronRight } from "lucide-react";


const TopicsList = async () => {

    const topics=await prisma.topic.findMany();

    console.log("Current Topics ",topics);

    if (!topics || topics.length === 0) {
        return (
            <p className="text-gray-400 text-sm mt-4 text-center">
                No topics found yet. Create your first one!
            </p>
        );
    }

    return (

        <div>

            <h2>Currnet Topics Are </h2>

            <ul className="mt-4 space-y-3">
                {topics.map((item, index) => (
                    <li
                        key={index}
                        className="group flex items-center gap-3 bg-zinc-900/40 hover:bg-zinc-800/80
                     rounded-xl p-3 border border-zinc-700/50 transition-all duration-300
                     hover:shadow-md hover:shadow-zinc-900"
                    >
                        <ChevronRight
                            className="text-orange-400 group-hover:translate-x-1 transition-transform duration-200"/>
                        <Link
                            href={paths.topicShow(item.slug)}
                            className="text-white font-medium group-hover:text-orange-300 transition-colors"
                        >
                            {item.slug}
                        </Link>
                    </li>
                ))}
            </ul>


        </div>
    );
};

export default TopicsList;