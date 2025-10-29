'use client';

import React, {useState} from 'react';
import {Menu, X, Sparkles, Crown, Github, Linkedin, Search} from "lucide-react";
import Link from "next/link";

import "../styles/components/StyledHeader.css"
import {signOut, useSession} from "next-auth/react";
import LoadingSpinner from "@/components/LoadingSpinnerClient";
import SignOutButton from "@/components/SignOutButton";

const StyledHeader = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [query, setQuery] = useState('');

    const {data, status} = useSession();

    console.log("Styled Header ", data)

    const navLinks = [
        {name: "Home", href: "/"},
        {name: "About", href: "#"},
        {name: "Features", href: "#"},
        {name: "Blog", href: "#"},
        {name: "Contact", href: "#"},
    ];

    return (
        <header className={`header ${menuOpen ? "menu-active" : ""} z-10`}>
            <div className="header-inner">
                {/* Logo */}
                <div className="logo">
                    <Crown className="logo-icon"/>
                    <Link href={"/"}>
                        <span className="logo-text">Nexus</span>
                    </Link>
                    <Sparkles className="spark-icon"/>
                </div>

                {/*</nav>*/}
                <div className="flex-1 relative max-w-xl mx-6">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                            size={18}/>
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for projects, blogs, tutorials..."
                        className="w-full py-3 pl-10 pr-4 rounded-lg bg-[rgba(255,255,255,0.05)] border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 backdrop-blur-md transition-all duration-300 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30"
                    />
                    {/* Animated glow */}
                    <div
                        className="absolute inset-0 rounded-lg pointer-events-none border border-blue-500/30 animate-pulse blur-sm"></div>
                </div>

                {/* Right Side */}
                <div className="header-right">
                    {/*<div className="socials">*/}
                    {/*    <a href="#" className="social-icon"><Github size={18}/></a>*/}
                    {/*    <a href="#" className="social-icon"><Linkedin size={18}/></a>*/}
                    {/*</div>*/}

                    <div className={"flex items-center "}>
                        <Link href={"/signin"}>
                            <div className={`flex items-center mr-8`}>
                                <span className={"mr-4"}>{status === "loading" ? <LoadingSpinner size={15}/> :
                                    <Github size={25} color={"#fff"}/>}</span>
                                <span className="text-white">{data?.user?.name || "Not signed in"}</span>
                            </div>
                        </Link>
                        {status === "unauthenticated" ?
                            <Link href="/signin">
                                <button
                                    type="button"
                                    className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300 ease-in-out "
                                >
                                    Sign In
                                </button>
                            </Link> :
                            <SignOutButton/>
                        }
                    </div>


                    {/* Mobile Toggle */}
                    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={22}/> : <Menu size={22}/>}
                    </button>
                </div>
            </div>

            {/* Animated glow line */}
            <div className="header-glow"></div>
        </header>
    );
};

export default StyledHeader;
