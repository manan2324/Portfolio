import { Mail, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';

export default function Footer({ scrollToSection }) {
    return (
        <footer className="py-12 sm:py-16 bg-slate-950 border-t border-slate-900 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    {/* Left Side - Name, Title, and Social Icons */}
                    <div className="flex flex-col gap-4">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Manan Patel</h3>
                            <p className="text-slate-400 text-sm sm:text-base">Full-Stack Web Developer</p>
                        </div>
                        
                        <div className="flex gap-4 text-slate-400">
                            <Link href="mailto:patelmanan5656@gmail.com" className="hover:text-purple-400 transition-colors">
                                <Mail className="w-5 h-5" />
                            </Link>
                            <Link target="_blank" href="https://www.linkedin.com/in/manan-patel-23x/" className="hover:text-purple-400 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link target="_blank" href="https://github.com/manan2324" className="hover:text-purple-400 transition-colors">
                                <Github className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Side - Navigation and Copyright */}
                    <div className="flex flex-col items-start md:items-end gap-4">
                        <nav className="flex flex-wrap gap-6 text-sm sm:text-base">
                            <button onClick={() => scrollToSection('home')} className="text-slate-400 hover:text-white transition-colors">Home</button>
                            <button onClick={() => scrollToSection('about')} className="text-slate-400 hover:text-white transition-colors">About</button>
                            <button onClick={() => scrollToSection('projects')} className="text-slate-400 hover:text-white transition-colors">Projects</button>
                            <button onClick={() => scrollToSection('contact')} className="text-slate-400 hover:text-white transition-colors">Contact</button>
                        </nav>
                        
                        <p className="text-slate-500 text-xs sm:text-sm">
                            &copy; {new Date().getFullYear()} Manan Patel. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}