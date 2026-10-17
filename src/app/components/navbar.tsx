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
        <nav id="home" className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md">
            <div className="max-w-[1500px] mx-auto px-6 py-5 flex items-center justify-between">
                <Image
                    src="/images/logo.png"
                    alt="My Portfolio Logo"
                    width={150}
                    height={60}
                />
                <div className="flex items-center gap-8">

                    <Link
                        href="#home"
                        className={`transition ${activeSection === "home"
                            ? "text-gray-600 bg-(--light-pink) px-3 py-2 rounded-full"
                            : "text-gray-600 hover:text-(--light-pink)"
                            }`}
                    >
                        Home
                    </Link>

                    <Link
                        href="#about"
                        className={`transition ${activeSection === "about"
                            ? "text-gray-600 bg-(--light-pink) px-3 py-2 rounded-full"
                            : "text-gray-600 hover:text-(--light-pink)"
                            }`}
                    >
                        About Me
                    </Link>

                    <Link
                        href="#projects"
                        className={`transition ${activeSection === "projects"
                            ? "text-gray-600 bg-(--light-pink) px-3 py-2 rounded-full"
                            : "text-gray-600 hover:text-(--light-pink)"
                            }`}
                    >
                        Projects
                    </Link>

                    <Link
                        href="#contact"
                        className={`transition ${activeSection === "contact"
                            ? "text-gray-600 bg-(--light-pink) px-3 py-2 rounded-full"
                            : "text-gray-600 hover:text-(--light-pink)"
                            }`}
                    >
                        Contact
                    </Link>

                </div>
            </div>
        </nav>
    );
}