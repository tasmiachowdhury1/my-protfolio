import Image from "next/image";

export default function About() {
    return (
        <section
            id="about"
            className="relative min-h--[80vh] bg-[#FDF8F5] border-b border-pink-300  py-15 px-6 overflow-hidden"
        >

            <div className="relative z-10 max-w-[1500px] mx-auto w-full">

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative flex justify-center items-center">

                        <Image
                            src="/images/profile-2.png"
                            alt="Tasmia Chowdhury"
                            width={400}
                            height={500}
                            className="h-auto w-full max-w-[600px] object-cover"
                        />

                    </div>

                    <div>
                        <h1 className="text-(--pink) text-2xl font-semibold uppercase">
                            About Me
                        </h1>

                        <h2 className="text-gray-800 text-4xl mt-2">
                            A little bit about me.
                        </h2>
                        <p className="text-gray-500 leading-7 mt-5">
                            I'm Tasmia Chowdhury. I'm a passionate web developer who enjoys
                            creating modern, responsive and user-friendly
                            websites. I love learning new technologies and
                            turning ideas into real-world projects.
                        </p>

                        <p className="text-gray-500 leading-7 mt-4">
                            I focus on writing clean code, improving my
                            skills and building beautiful digital
                            experiences.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-7">

                            <div
                                className="p-4 rounded-xl
                                           bg-(--green)/50"
                            >
                                <p className="text-xs text-gray-500">
                                    Name
                                </p>

                                <p className="font-semibold text-gray-800 mt-1">
                                    Tasmia Chowdhury
                                </p>
                            </div>

                            <div
                                className="p-4 rounded-xl
                                           bg-(--light-pink)/30"
                            >
                                <p className="text-xs text-gray-500">
                                    Role
                                </p>

                                <p className="font-semibold text-gray-800 mt-1">
                                    Web Developer
                                </p>
                            </div>

                            <div
                                className="p-4 rounded-xl
                                           bg-(--light-pink)/30"
                            >
                                <p className="text-xs text-gray-500">
                                    Experience
                                </p>

                                <p className="font-semibold text-gray-800 mt-1">
                                    Growing Developer
                                </p>
                            </div>

                            <div
                                className="p-4 rounded-xl
                                           bg-(--green)/50"
                            >
                                <p className="text-xs text-gray-500">
                                    Focus
                                </p>

                                <p className="font-semibold text-gray-800 mt-1">
                                    Full Stack Development
                                </p>
                            </div>

                        </div>

                        <div className="mt-8">

                            <h3 className="text-lg font-bold text-(--light-pink) mb-4">
                                My Skills
                            </h3>

                            <div className="flex flex-wrap gap-3">

                                <span className="px-4 py-2 rounded-full bg-(--light-pink)/30
                         text-gray-700 text-sm">
                                    HTML
                                </span>

                                <span className="px-4 py-2 rounded-full bg-(--green)
                         text-gray-700 text-sm">
                                    CSS
                                </span>

                                <span className="px-4 py-2 rounded-full bg-(--light-pink)/30
                         text-gray-700 text-sm">
                                    JavaScript
                                </span>

                                <span className="px-4 py-2 rounded-full bg-(--green)
                         text-gray-700 text-sm">
                                    TypeScript
                                </span>

                                <span className="px-4 py-2 rounded-full bg-(--light-pink)/30
                         text-gray-700 text-sm">
                                    React
                                </span>

                                <span className="px-4 py-2 rounded-full bg-(--green)
                         text-gray-700 text-sm">
                                    Next.js
                                </span>

                                <span className="px-4 py-2 rounded-full bg-(--light-pink)/30
                         text-gray-700 text-sm">
                                    Node.js
                                </span>

                                <span className="px-4 py-2 rounded-full bg-(--green)
                         text-gray-700 text-sm">
                                    MongoDB
                                </span>

                                <span className="px-4 py-2 rounded-full bg-(--light-pink)/30
                         text-gray-700 text-sm">
                                    Tailwind CSS
                                </span>

                            </div>

                        </div>
                    </div>


                </div>


            </div>
        </section>
    );
}