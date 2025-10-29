// import React from 'react';
// import {useFormStatus} from "react-dom";
//
// const FormButton = () => {
//
//     const {pending} =useFormStatus()
//
//  return (
//     <div>
//
//     </div>
//  );
// };
//
// export default FormButton;


"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import { motion } from "framer-motion";
import { Loader2, CheckCircle } from "lucide-react";

const SubmitButton = ({ label = "Create" }) => {
    const { pending } = useFormStatus();

    return (
        <motion.button
            type="submit"
            disabled={pending}
            whileTap={!pending ? { scale: 0.97 } : {}}
            className={`relative overflow-hidden flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-white font-semibold 
      shadow-md transition-all duration-300
      ${
                pending
                    ? "bg-gradient-to-r from-indigo-400 to-blue-500 cursor-not-allowed opacity-90"
                    : "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-500 hover:to-blue-600"
            }`}
        >
            {pending ? (
                <>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    >
                        <Loader2 className="w-5 h-5 text-white" />
                    </motion.div>
                    <span className="text-white">Creating...</span>
                </>
            ) : (
                <>
                    <CheckCircle className="w-5 h-5 text-white opacity-80" />
                    <span>{label}</span>
                </>
            )}
        </motion.button>
    );
};

export default SubmitButton;
