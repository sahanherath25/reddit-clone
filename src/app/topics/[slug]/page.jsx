import React from 'react';
import prisma from "../../../../prisma";
import {notFound} from "next/navigation";

import {CalendarDays, Clock} from "lucide-react";
import PostCreateForm from "@/components/posts/PostCreateForm";

const Page = async ({params, searchParams}) => {

    const {slug: loadedSlug} = await params

    console.log("Current Toipic is ",loadedSlug)

    const topic = await prisma.topic.findUnique({where: {slug: loadedSlug}})

    const {slug, description, createdAt} = topic

    if (!topic) {
        return (
            <div className="text-center text-gray-400 py-10">
                Topic not found.
            </div>
        );
    }


    return (

        <section className="max-w-3xl mx-auto mt-10 relative bg-gradient-to-br from-[#0c0c0c] via-[#1a1a2e] to-[#16213e]
                        border border-white/10 rounded-2xl shadow-lg p-8 text-white overflow-hidden mb-10">

            <PostCreateForm slug={loadedSlug}/>

            {/* Glowing background orb */}
            <div
                className="absolute w-48 h-48 bg-gradient-to-br from-[#ff6b6b] to-[#ffa726] rounded-full filter blur-3xl opacity-30 top-10 left-10 animate-[float_6s_ease-in-out_infinite] pointer-events-none"></div>
            <div
                className="absolute w-36 h-36 bg-gradient-to-br from-[#4ecdc4] to-[#556cd6] rounded-full filter blur-3xl opacity-30 bottom-20 right-10 animate-[float_6s_ease-in-out_infinite] pointer-events-none"></div>
            <div
                className="absolute w-44 h-44 bg-gradient-to-br from-[#a855f7] to-[#ec4899] rounded-full filter blur-3xl opacity-30 top-1/2 left-1/4 animate-[float_6s_ease-in-out_infinite] pointer-events-none"></div>

            {/* Header */}
            <div className="relative z-10 mb-6 border-b border-white/10 pb-4">
                <h1 className="text-3xl font-bold text-[#ffa726] tracking-tight">
                    {slug}
                </h1>

                <div className="mt-2 flex items-center gap-4 text-sm text-gray-300">
                    <div className="flex items-center gap-1">
                        <CalendarDays className="w-4 h-4"/>
                        <span>
                              {new Date(createdAt).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                              })}
                         </span>
                    </div>

                </div>
            </div>

            {/* Description */}
            <p className="relative z-10 text-gray-200 leading-relaxed text-lg">
                {description}
            </p>

            {/* Optional Back Button */}
            <div className="relative z-10 mt-8">
                <a
                    href="/topics"
                    className="inline-block px-6 py-2 rounded-lg bg-gradient-to-br from-[#5C3E94] to-[#811844]
                     text-white font-medium transition-transform transform hover:-translate-y-1 hover:scale-105 shadow-lg"
                >
                    Back to Topics
                </a>
            </div>
        </section>
    );
};

export default Page;