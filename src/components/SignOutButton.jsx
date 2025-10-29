import {signOut} from "next-auth/react";

export default function SignOutButton() {
    return (
        <button
            onClick={()=>signOut()}
            type="button"
            className="
        bg-gray-800
        text-white
        font-semibold
        px-6
        py-2
        rounded-full
        shadow-md
        hover:bg-gray-700
        hover:scale-105
        transition
        duration-300
        ease-in-out
        border-2
        border-gray-600
        hover:border-gray-400
      "
        >
            Sign Out
        </button>
    );
}
