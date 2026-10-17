"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <nav id="home" className="fixed top-0 left-0 w-full border-b border-pink-300 z-50 bg-white/90 backdrop-blur-md">
            <div className="max-w-[1500px] mx-auto px-3 sm:px-6 py-3 sm:py-5 flex items-center justify-between gap-3">
                <Image
                    src="/images/logo.png"
                    alt="My Portfolio Logo"
                    width={150}
                    height={60}
                    className="w-[100px] sm:w-[120px] md:w-[150px] h-auto shrink-0"
                />

                <div className="flex items-center gap-1 sm:gap-3 md:gap-8 text-xs sm:text-sm md:text-base">

                    <Link
                        href="#home"
                        className={`transition ${activeSection === "home"
                            ? "text-gray-600 bg-(--light-pink) px-2 sm:px-3 py-2 rounded-full"
                            : "text-gray-600 hover:text-(--light-pink) px-2 sm:px-3 py-2"
                            }`}
                    >
                        Home
                    </Link>

                    <Link
                        href="#about"
                        className={`transition ${activeSection === "about"
                            ? "text-gray-600 bg-(--light-pink) px-2 sm:px-3 py-2 rounded-full"
                            : "text-gray-600 hover:text-(--light-pink) px-2 sm:px-3 py-2"
                            }`}
                    >
                        About Me
                    </Link>

                    <Link
                        href="#projects"
                        className={`transition ${activeSection === "projects"
                            ? "text-gray-600 bg-(--light-pink) px-2 sm:px-3 py-2 rounded-full"
                            : "text-gray-600 hover:text-(--light-pink) px-2 sm:px-3 py-2"
                            }`}
                    >
                        Projects
                    </Link>

                    <Link
                        href="#contact"
                        className={`transition ${activeSection === "contact"
                            ? "text-gray-600 bg-(--light-pink) px-2 sm:px-3 py-2 rounded-full"
                            : "text-gray-600 hover:text-(--light-pink) px-2 sm:px-3 py-2"
                            }`}
                    >
                        Contact
                    </Link>

                </div>
            </div>
        </nav>
    );
}