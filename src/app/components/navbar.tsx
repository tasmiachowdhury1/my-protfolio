
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");

    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const sections = document.querySelectorAll(
            "#home, #about, #projects, #contact"
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.3,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const navItems = [
        { label: "Home", id: "home" },
        { label: "About Me", id: "about" },
        { label: "Projects", id: "projects" },
        { label: "Contact", id: "contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 z-50 w-full border-b border-pink-300 bg-white/90 backdrop-blur-md">
            <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-3 px-3 py-3 sm:px-6 sm:py-5">

                <Link href="#home" onClick={() => scrollToSection("home")}>
                    <Image
                        src="/images/logo.png"
                        alt="My Portfolio Logo"
                        width={150}
                        height={60}
                        className="h-auto w-[100px] shrink-0 sm:w-[120px] md:w-[150px]"
                    />
                </Link>

                <div className="flex items-center gap-1 text-xs sm:gap-3 sm:text-sm md:gap-8 md:text-base">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`rounded-full px-2 py-2 transition sm:px-3 ${activeSection === item.id
                                    ? "bg-(--light-pink) text-gray-600"
                                    : "text-gray-600 hover:bg-(--soft-pink)"
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}
