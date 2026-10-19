import Image from "next/image";

export default function Hero() {
    return (
        <section id="home"
            className="min-h-[80vh] bg-[#FDF8F5] flex items-center border-b border-pink-300 px-4 sm:px-6 md:px-8"
        >
            <div className="max-w-[1500px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-2 py-4 sm:py-10">

                <div>
                    <p className="text-(--light-pink) font-semibold text-xl sm:text-2xl mb-3">
                        Hello, I'm
                    </p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
                        Tasmia {" "}
                        <span className="text-(--light-pink)">
                            Chowdhury
                        </span>
                    </h1>

                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mt-5">
                        Junior Web Developer
                    </h2>
                    <p className="text-gray-500 max-w-lg mt-5 leading-7">
                        I build modern, responsive and user-friendly
                        websites with clean code and creative designs.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-8">

                        <a
                            href="#projects"
                            className="px-6 py-3 rounded-full
                                       bg-(--pink) text-white
                                       font-medium hover:scale-105
                                       transition"
                        >
                            View Projects
                        </a>

                        <a
                            href="#contact"
                            className="px-6 py-3 rounded-full
                                       border-2 border-(--green)
                                       text-gray-700 font-medium
                                       hover:bg-(--green)
                                       hover:scale-105
                                       transition"
                        >
                            Contact Me
                        </a>

                    </div>
                </div>

                <div className="relative flex justify-center items-center">

                    <Image
                        src="/images/profile-2.png"
                        alt="Tasmia Chowdhury"
                        width={400}
                        height={500}
                        className="h-auto w-full object-cover "
                    />

                </div>

            </div>
        </section>
    );
}