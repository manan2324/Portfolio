import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';

export default function Project() {
    const projects_data = [
        {
            title: "Finex - A Stock Exchange WebApp",
            description: "Finex is a modular, full-stack trading simulation platform inspired by Zerodha. It offers a realistic dashboard, secure authentication, and a responsive public website.",
            tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
            image: "/Project1.png",
            githubLink: "https://github.com/manan2324/Finex-a-Zerodha-Clone",
            liveDemoLink: "https://finex-three.vercel.app/"
        },
        {
            title: "Wanderlust- Travel Booking Platform",
            description: "A comprehensive travel booking platform that allows users to explore destinations, book hotels, and manage their itineraries with ease.",
            tags: ["Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap"],
            image: "/Project2.png",
            githubLink: "https://github.com/manan2324/Wanderlust-project",
            liveDemoLink: "https://wanderlust-project-x5nl.onrender.com"
        },
        {
            title: "SnapLink - A URL Shortener",
            description: "A modern, fast URL shortening service built with Next.js. Create short, memorable links in seconds without registration.",
            tags: ["Next.js", "MongoDB", "Tailwind CSS"],
            image: "/Project3.png",
            githubLink: "https://github.com/manan2324/Snaplink",
            liveDemoLink: "https://snaplink-nllc.vercel.app/"
        }
    ]
    return (
        <section id="projects" className="py-16 sm:py-20 md:py-24 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-12">
                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Featured Projects</h2>
                        <div className="w-16 sm:w-20 h-1 bg-purple-500 rounded-full"></div>
                    </div>
                    <Link href={"https://github.com/manan2324"} target='_blank'>
                        <button className="hidden md:flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mt-4 md:mt-0">
                            View all projects <ExternalLink className="w-4 h-4" />
                        </button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {projects_data.map((project, index) => (
                        <div key={index} className="group rounded-xl sm:rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/20">
                            <div className="h-40 sm:h-48 w-full relative overflow-hidden bg-slate-800">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                            </div>

                            <div className="p-4 sm:p-5 md:p-6">
                                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-xs sm:text-sm mb-4 sm:mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-3 sm:gap-4">
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-purple-400 transition-colors flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium"
                                    >
                                        <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Code
                                    </a>
                                    {project.liveDemoLink && (
                                        <a
                                            href={project.liveDemoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-purple-400 transition-colors flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium"
                                        >
                                            <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <Link href={"https://github.com/manan2324"} target='_blank'>
                    <button className="sm:hidden w-full mt-6 sm:mt-8 py-3 rounded-xl border border-slate-800 text-sm text-slate-300 hover:bg-slate-900 transition-colors">
                        View all projects
                    </button>
                </Link>
            </div>
        </section>
    )
}