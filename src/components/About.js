import { Database, Code2, Palette, GitBranch, Box, Layers, Download } from 'lucide-react';
import Link from 'next/link';

export default function About() {
    const skills_data = [
        { name: "MongoDB", icon: <Database className="w-7 h-7" />, color: "bg-green-600" },
        { name: "Express.js", icon: <Box className="w-7 h-7" />, color: "bg-slate-600" },
        { name: "React", icon: <Code2 className="w-7 h-7" />, color: "bg-cyan-500" },
        { name: "Node.js", icon: <Layers className="w-7 h-7" />, color: "bg-green-500" },
        { name: "Next.js", icon: <Code2 className="w-7 h-7" />, color: "bg-slate-700" },
        { name: "Tailwind CSS", icon: <Palette className="w-7 h-7" />, color: "bg-sky-500" },
        { name: "Bootstrap", icon: <Palette className="w-7 h-7" />, color: "bg-purple-600" },
        { name: "Git & GitHub", icon: <GitBranch className="w-7 h-7" />, color: "bg-orange-600" }
    ]
    return (
        <section id="about" className="py-16 sm:py-20 md:py-24 bg-slate-900/50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">About Me</h2>
                    <div className="w-16 sm:w-20 h-1 bg-linear-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
                </div>

                <div className="max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
                    <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed text-center px-4">
                        I'm a <span className="text-cyan-400 font-semibold">Full Stack Developer</span> passionate about building modern web applications. 
                        I specialize in creating seamless digital experiences using <span className="text-purple-400 font-semibold">frontend</span> and 
                        <span className="text-green-400 font-semibold"> backend</span> technologies to deliver end-to-end solutions.
                    </p>
                    <div className="flex justify-center mt-6 sm:mt-8">
                        <Link 
                            href="/Manan_Patel_Resume.pdf" 
                            download
                            className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105"
                        >
                            <Download className="w-5 h-5" />
                            Download Resume
                        </Link>
                    </div>
                </div>

                <div className="text-center mb-8 sm:mb-10">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">Skills & Technologies</h3>
                    <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto px-4">
                        Technologies and tools I work with to build modern web applications.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto">
                    {skills_data.map((skill, index) => (
                        <div
                            key={index}
                            className="group p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-slate-700/50 hover:border-cyan-500/50 hover:bg-slate-800/80 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                        >
                            <div className={`${skill.color} w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center text-white mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-md`}>
                                {skill.icon}
                            </div>
                            <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}