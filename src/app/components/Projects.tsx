import Image from "next/image";
import Link from "next/link";
export default function Projects() {
    const projects = [
        {
            title: "Bazar Dor",
            description:
                "A price comparison website that shows today's and yesterday's market prices.",
            image: "/images/bazar-dor.png",
            tags: ["Next.js", "TypeScript", "Mongodb", "Better-Auth"],
            link: "https://assignment-7-bicj.vercel.app/",
        },
        {
            title: "Dev Stack",
            description:
                "A modern platform for exploring development tools, resources and learning materials.",
            image: "/images/dev-stack.png",
            tags: ["React", "TypeScript", "Tailwind CSS"],
            link: "https://tasmiachowdhury1.github.io/B14-A01-DevConf-2026-main/",
        },
        {
            title: "Fitlog",
            description:
                "A fitness and workout tracking platform that helps users explore exercises, create personalized workout plans, and track their fitness progress. It offers an easy-to-use interface to make staying active and reaching fitness goals simpler.",
            image: "/images/fitlog.png",
            tags: ["Next.js", "Tailwind CSS", "TypeScript"],
            link: "https://fitlog-two-blush.vercel.app/",
        },
        {
            title: "Dev conference",
            description:
                "A modern and responsive conference website designed to showcase upcoming developer events, speakers, schedules, and conference information in a clean and engaging layout.",
            image: "/images/dev.png",
            tags: ["HTML", "CSS"],
            link: "https://tasmiachowdhury1.github.io/B14-A01-DevConf-2026-main/",
        },
    ];

    return (
        <section
            id="projects"
            className="relative min-h-[80vh] bg-[#FDF8F5] border-b border-pink-300  py-15 px-6 overflow-hidden"
        >

            <div className="relative z-10 max-w-[1500px] mx-auto">

                {/* Heading */}
                <div className="mb-12">

                    <p className="text-[#FFB7C5] text-sm font-semibold uppercase">
                        My Projects
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Some of my recent work
                    </h2>

                    <p className="text-gray-500 text-sm mt-2 max-w-xl">
                        Here are some projects I have created to practice
                        my skills and improve my experience.
                    </p>

                </div>


                {/* Projects */}
                <div className="grid md:grid-cols-2 gap-10">

                    {projects.map((project, index) => (

                        <div
                            key={index}
                            className="bg-white rounded-2xl
                                       border border-gray-100
                                       shadow-sm overflow-hidden
                                       hover:-translate-y-2
                                       hover:shadow-lg
                                       transition duration-300"
                        >

                            {/* Project Image */}
                            <div className="h-44 bg-[#F8F8F8] overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={800}
                                    height={500}
                                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                                />

                            </div>


                            {/* Content */}
                            <div className="p-5">

                                <div className="flex items-start justify-between gap-3">

                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-500 text-xs
                                                      leading-5 mt-2">
                                            {project.description}
                                        </p>
                                    </div>

                                </div>


                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mt-4">

                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[10px] px-3 py-1
                                                       rounded-full
                                                       bg-[#D5F3D8]
                                                       text-gray-600"
                                        >
                                            {tag}
                                        </span>
                                    ))}

                                </div>


                                {/* Button */}
                                <Link
                                    href={project.link}
                                    target="_blank">
                                    <button

                                        className="mt-4 px-4 py-2
                                               rounded-full
                                               bg-[#FFB7C5]
                                               text-white text-xs
                                               hover:bg-[#f49eaf]
                                               transition cursor-pointer"
                                    >
                                        View Project →
                                    </button></Link>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}