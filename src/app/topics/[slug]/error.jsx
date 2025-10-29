"use client";

import { useEffect, useState } from "react";

export default function Error({ error, reset }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        console.error(error);
        setShow(true);
    }, [error]);

    if (!show) return null;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 dark:bg-red-900 px-4 text-center">
            <h1 className="text-5xl font-bold text-red-600 mb-4">Oops!</h1>
            <p className="text-lg text-red-800 dark:text-red-200 mb-6">
                Something went wrong while loading this snippet.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
                {error?.message || "Unknown error occurred"}
            </p>
            <button
                onClick={() => reset()}
                className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition"
            >
                Try Again
            </button>
        </div>
    );
}
