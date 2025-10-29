"use client";

import { motion } from "framer-motion";
import {signIn, useSession} from "next-auth/react";

// import * as actions from "@/actions/index";

export default function SignInPage() {

    const handleGithubSignIn = async () => {
        await signIn("github");
    };

    const session=useSession();

    console.log("Client Session Data ",session)


    return (
        <div className="w-full flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
            {/* Background Blobs */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.2, scale: 1.4 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                className="absolute w-[400px] h-[400px] bg-purple-600 rounded-full blur-3xl top-20 left-20"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.15, scale: 1.5 }}
                transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
                className="absolute w-[400px] h-[400px] bg-blue-500 rounded-full blur-3xl bottom-20 right-20"
            />

            {/* Sign-In Card */}
            <motion.div
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 90 }}
                className="relative z-10 w-[360px] bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl"
            >
                <motion.h1
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-bold text-center mb-4"
                >
                    Welcome Back 👋
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-300 text-center mb-8"
                >
                    Sign in with your GitHub account to continue
                </motion.p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => signIn("github")}
                    className="flex items-center justify-center gap-3 w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800 transition"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 .5C5.37.5 0 5.87 0 12.52a12 12 0 008.21 11.44c.6.11.82-.26.82-.58v-2.1c-3.34.73-4.04-1.63-4.04-1.63-.55-1.38-1.34-1.75-1.34-1.75-1.1-.76.08-.74.08-.74 1.22.08 1.87 1.25 1.87 1.25 1.09 1.87 2.86 1.33 3.56 1.02.11-.81.43-1.33.78-1.63-2.67-.3-5.48-1.36-5.48-6.06 0-1.34.47-2.43 1.25-3.29-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.25a11.2 11.2 0 016 0c2.29-1.57 3.3-1.25 3.3-1.25.66 1.65.25 2.87.12 3.17.78.86 1.25 1.95 1.25 3.29 0 4.72-2.81 5.75-5.49 6.05.44.38.83 1.11.83 2.24v3.32c0 .32.22.69.83.58A12 12 0 0024 12.52C24 5.87 18.63.5 12 .5z" />
                    </svg>
                    Sign in with GitHub
                </motion.button>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-center text-sm text-gray-400 mt-8"
                >
                    By signing in, you agree to our{" "}
                    <form>

                    </form>
                    <button  type={"submit"} onClick={handleGithubSignIn} className="underline hover:text-gray-200">
                        Terms of Service
                    </button>{" "}
                    and{" "}
                    <button  className="underline hover:text-gray-200">
                        Privacy Policy
                    </button>
                    .
                </motion.div>
            </motion.div>
        </div>
    );
}
