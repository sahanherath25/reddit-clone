"use client"

import React, {useActionState, useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";

import * as actions from "@/actions/index";
import {AlertTriangle} from "lucide-react";
import SubmitButton from "@/components/FormButton";

const PostCreateForm = ({slug}) => {

    const [formState, action] = useActionState(actions.createPost.bind(null, slug), {
        title: "", content: "", errors: {_form: ""}
    })




    const [showForm, setShowForm] = useState(false);

    console.log("FORM STATE  ", formState)

    return (
        <div className="flex justify-center items-start bg-gray-50 dark:bg-gray-900">
            {/* Create Button */}
            <button
                onClick={() => setShowForm(true)}
                className="px-6 py-3 text-white font-medium rounded-xl shadow-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-500 hover:to-blue-600 transition-all duration-300"
            >
                Create Post
            </button>

            {/* Popup Modal */}
            <AnimatePresence>
                {showForm && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-black/40 backdrop-blur-lg"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            onClick={() => setShowForm(false)}
                        />

                        {/* Modal */}
                        <motion.div
                            className="fixed top-1/2 left-1/2 w-[90%] max-w-lg -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 z-50"
                            initial={{scale: 0.8, opacity: 0, y: 20}}
                            animate={{scale: 1, opacity: 1, y: 0}}
                            exit={{scale: 0.8, opacity: 0, y: 20}}
                            transition={{type: "spring", stiffness: 200, damping: 20}}
                        >
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
                                Create New Post
                            </h2>

                            {/* Example Form */}
                            <form className="space-y-4" action={action}>
                                <motion.div
                                    animate={formState.errors?.name ? {x: [-4, 4, -4, 4, 0]} : {}}
                                    transition={{duration: 0.3}}
                                >
                                    <label className="block text-gray-700 font-bold dark:text-gray-300 mb-2">
                                        Post  Title
                                    </label>
                                    <input

                                        defaultValue={formState?.title ? formState.title : ""}
                                        name={"title"}
                                        type="text"
                                        className="w-full p-3  text-white  border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-gray-50 dark:bg-gray-700"
                                        placeholder="Enter Post  title"
                                    />

                                    {/*FORM ERROR*/}
                                    {!!formState.errors?.title &&
                                        (
                                            <div
                                                className="mt-2 flex items-center gap-2 p-2 rounded-md border-1 border-red-400
                                             bg-black text-white shadow-sm animate-slideIn"
                                            >
                                                <AlertTriangle className="w-5 h-5 text-orange-400"/>
                                                <p className=" text-red-500 dark:text-orange-400 animate-pulse">
                                                    {formState.errors?.title?.[0]}
                                                </p>
                                            </div>
                                        )
                                    }

                                </motion.div>

                                <motion.div
                                    animate={formState.errors?.content ? {x: [-4, 4, -4, 4, 0]} : {}}
                                    transition={{duration: 0.3}}
                                >
                                    <label className="block text-gray-700 font-bold dark:text-gray-300 mb-2">
                                        Content
                                    </label>
                                    <textarea
                                        defaultValue={formState?.content ? formState.content : ""}
                                        name={"content"}
                                        className="w-full text-white  p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-gray-50 dark:bg-gray-700"
                                        rows="3"
                                        placeholder="Enter content"
                                    ></textarea>
                                    {formState.errors?.content ?

                                        (
                                            <div
                                                className="mt-2 flex items-center gap-2 p-2 rounded-md border-1 border-red-400
                                             bg-black text-white shadow-sm animate-slideIn"
                                            >
                                                <AlertTriangle className="w-5 h-5 text-orange-400"/>
                                                <p className=" text-red-500 dark:text-orange-400 animate-pulse">
                                                    {formState.errors?.content?.[0]}
                                                </p>
                                            </div>
                                        )

                                        : null
                                    }

                                    {!!formState.errors?._form && (
                                        <motion.div
                                            animate={formState.errors?._form ? {x: [-4, 4, -4, 4, 0]} : {}}
                                            transition={{duration: 0.3}}
                                            className="mt-2 flex items-center gap-2 p-2 rounded-md border-1 border-red-400
                                             bg-black text-white shadow-sm animate-slideIn">
                                            <AlertTriangle className="w-5 h-5 text-orange-400"/>
                                            <p className=" text-red-500 dark:text-orange-400 animate-pulse">
                                                {formState.errors._form[0]}
                                            </p>
                                        </motion.div>
                                    )}

                                </motion.div>

                                <div className="flex justify-end gap-3 mt-4">
                                    <button
                                        type="button"
                                        onClick={() => setShowForm(false)}
                                        className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
                                    >
                                        Cancel
                                    </button>
                                    {/*<button*/}
                                    {/*    type="submit"*/}
                                    {/*    className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 shadow-md transition-all"*/}
                                    {/*>*/}
                                    {/*    Create*/}
                                    {/*</button>*/}
                                    <SubmitButton label={"Create"}/>
                                </div>
                            </form>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PostCreateForm;