"use client";
import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";

const navLinks = [
    { label: "Eye care division", href: "/eye-care" },
    { label: "Consult & cure", href: "/consult-cure" },
    { label: "Services", href: "/services" },
    { label: "Patient care", href: "/patient-care" },
    { label: "Blog", href: "/blog" },
    { label: "Career", href: "/career" },
    { label: "About us", href: "/about-us" },
    { label: "Contact us", href: "/contact" },
];

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(navLinks[0].label);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 border-t-2  py-6 sm:py-8 xl:py-10">
            {/* Gradient border wrapper */}
            <div className="max-w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto px-6 sm:px-4">
                <div
                    className="pl-[1px] pr-[0.5px] pb-[1px] pt-[.5px] rounded-full bg-gradient-to-r from-black/20 to-black/20 shadow-[0_4px_32px_0_rgba(19,28,101,0.10)] backdrop-blur-[7px]"
                >
                    <div className="flex items-center rounded-full bg-transparent pl-6 pr-6 lg:pr-0 w-full relative">
                        {/* Logo */}
                        <div className="flex items-center gap-2 shrink-0">
                            <img
                                src="/logos/navlogo.svg"
                                alt="Bejan Singh Logo"
                                className="w-32 h-10 object-contain object-center"
                            />
                        </div>
                        {/* Desktop Nav Links */}
                        <ul className="hidden lg:flex flex-1 items-center justify-center text-xs lg:text-[11px] xl:text-sm text-white font-medium font-inter tracking-wide">
                            {navLinks.map((link, idx) => (
                                <li
                                    key={link.label}
                                    className={`px-2 ${idx !== navLinks.length - 1 ? "border-r border-white/30" : ""
                                        } ${activeLink === link.label ? "font-bold text-white" : ""} cursor-pointer transition-colors duration-200`}
                                    onClick={() => setActiveLink(link.label)}
                                >
                                    <a href={link.href} className="block w-full h-full">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        {/* Book Now Button */}
                        <button className="hidden lg:block bg-[#00A876EB] text-white rounded-full px-6 py-3 font-normal ml-auto hover:bg-[#24a88e] transition-all duration-200 text-xs xl:text-sm shrink-0 ">
                            Book Now
                        </button>
                        {/* Hamburger */}
                        <button
                            className="lg:hidden flex flex-col justify-center items-center ml-auto"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            <TiThMenu className="w-6 rounded my-0.5 transition-all duration-300 text-white" />
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Nav */}
            <div className="lg:hidden">
                <div
                    className={`transition-all duration-300 ease-in-out ${menuOpen
                        ? "max-h-[500px] opacity-100 scale-100"
                        : "max-h-0 opacity-0 scale-95 pointer-events-none"
                        } overflow-hidden`}
                >
                    <ul className="flex flex-col items-stretch gap-0 text-xs text-gray-900 font-medium font-inter tracking-wide bg-white rounded-2xl shadow-xl py-0 z-20 mt-2 border border-gray-100">
                        {navLinks.map((link, idx) => (
                            <li
                                key={link.label}
                                className={`px-6 py-3 w-full text-left border-b last:border-b-0 border-gray-100
                        ${activeLink === link.label ? "font-bold text-black bg-gray-50" : ""}
                        cursor-pointer transition-colors duration-200`}
                                onClick={() => {
                                    setActiveLink(link.label);
                                    setMenuOpen(false);
                                }}
                            >
                                <a href={link.href} className="block w-full h-full">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li className="px-6 py-3">
                            <button className=" bg-[#2DC6A7] text-white rounded-full px-6 py-2 font-semibold hover:bg-[#24a88e] transition-all duration-200 text-xs">
                                Book Now
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;