import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer id="contact" className="bg-white/90 border-t border-[#FFB7C5]/30">

            <div className="max-w-[1500px] mx-auto px-6 py-7">

                <div className="flex flex-col md:flex-row
                                items-center justify-between">

                    {/* Logo + Description */}
                    <div className="text-center md:text-left">

                        <Link href="#home">
                            <Image
                                src="/images/logo.png"
                                alt="My Portfolio Logo"
                                width={150}
                                height={60}
                                className="w-[100px] sm:w-[120px] md:w-[150px] h-auto shrink-0"
                            /></Link>

                        <p className="text-gray-500 text-sm mt-2 max-w-sm">
                            A passionate web developer who loves creating
                            modern, responsive and user-friendly websites.
                        </p>

                    </div>


                    {/* Navigation */}
                    <div className="flex flex-col flex-wrap justify-center gap-3">
                        <p className="font-bold text-xs text-gray-500">
                            <span className="text-sm font-bold text-(--deep)">Location:</span> {"   "}
                            Kazir Dewry, Chittagong, Bangladesh

                        </p>
                        <p className="font-bold text-xs text-gray-500">
                            <span className="text-sm font-bold text-(--deep)">Email:</span> {"   "}
                            tasmiajabad4142@gmail.com

                        </p>

                    </div>


                    {/* Social Links */}
                    <div className="flex flex-col gap-3">
                        <h2 className="font-bold text-xl text-(--pink) text-left">Follow me!</h2>
                        <div className="flex gap-3">
                            <Link
                                href="https://github.com/tasmiachowdhury1"
                                className="w-6 h-5 rounded-full
                                       bg-(--green)
                                       flex items-center justify-center
                                       text-gray-700 text-sm
                                       hover:bg-(--light-pink)
                                       transition">
                                <FontAwesomeIcon icon={faGithub} />
                            </Link>

                            <Link
                                href="https://www.linkedin.com/in/tasmia-chy/"
                                className="w-5 h-5
                                       bg-(--soft-pink)
                                       flex items-center justify-center
                                       
                                       hover:bg-green-500/45
                                       transition">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </Link>
                        </div>

                    </div>

                </div>

                <div className="border-t border-gray-200 mt-10 pt-6
                                flex flex-col md:flex-row
                                items-center justify-between gap-3">

                    <p className="text-xs text-gray-500">
                        © 2026 Tasmia Chowdhury. All rights reserved.
                    </p>

                    <a
                        href="#home"
                        className="text-xs text-gray-500
                                   hover:text-[#FFB7C5] transition"
                    >
                        Back to top ↑
                    </a>

                </div>

            </div>
        </footer>
    );
}