import { useEffect, useRef } from 'react';
import { Send, Github, Linkedin, Mail, User } from 'lucide-react';
import Link from 'next/link';
import Typed from 'typed.js';
import Image from 'next/image';

export default function Hero({ scrollToSection }) {
    const typedRef = useRef(null);
    const typedInstance = useRef(null);

    useEffect(() => {
        if (!typedRef.current) return;

        typedInstance.current = new Typed(typedRef.current, {
            strings: ['Full-Stack Web Developer', 'UI/UX Enthusiast', "Next.js Developer"],
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 1500,
            startDelay: 200,
            loop: true,
            smartBackspace: true,
            showCursor: true,
            cursorChar: '|',
        });

        return () => {
            typedInstance.current?.destroy();
        };
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 pb-12 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-600/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-fuchsia-600/10 rounded-full blur-[100px]"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:justify-between items-center gap-8 md:gap-12 lg:gap-32 xl:gap-40 z-10">
                {/* Left Column: Text Content */}
                <div className="text-center md:text-left mt-4">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-3xl mx-auto md:mx-0 font-extrabold tracking-tight text-white mb-4 sm:mb-6 leading-tight wrap-break-word space-y-1">
                        <span className="block">Hello! 👋</span>
                        <span className="inline-block mr-1.5">I'm</span>
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient-x">
                            Manan Patel
                        </span>
                    </h1>

                    <p className="mt-3 sm:mt-4 max-w-xl text-base sm:text-lg md:text-xl text-slate-400 mb-8 sm:mb-10 mx-auto md:mx-0">
                        <span className='block'>I am a passionate</span>
                        <span ref={typedRef} className="text-purple-300 font-semibold inline-block align-middle"></span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-purple-600 text-white text-sm sm:text-base font-semibold hover:bg-purple-500 transition-all duration-300 shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 group"
                        >
                            Contact Me
                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="px-6 py-3 sm:px-8 sm:py-4 rounded-full border border-slate-700 bg-slate-900/50 text-white text-sm sm:text-base font-semibold hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 backdrop-blur-sm"
                        >
                            View Work
                        </button>
                    </div>

                    <div className="mt-10 sm:mt-12 md:mt-16 flex gap-5 sm:gap-6 text-slate-400 justify-center md:justify-start">
                        <Link target='_blank' href="https://github.com/manan2324" className="hover:text-purple-400 transition-colors"><Github className="w-6 h-6" /></Link>
                        <Link target='_blank' href="https://www.linkedin.com/in/manan-patel-23x/" className="hover:text-purple-400 transition-colors"><Linkedin className="w-6 h-6" /></Link>
                        <Link href="mailto:patelmanan5656@gmail.com" className="hover:text-purple-400 transition-colors"><Mail className="w-6 h-6" /></Link>
                    </div>
                </div>

                {/* Right Column: Profile Photo */}
                <div className="flex justify-center md:justify-end relative mt-8 md:mt-0">
                    <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                        <div className="absolute inset-0 bg-linear-to-tr from-purple-600 to-pink-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                        <div className="relative w-full h-full rounded-full border-2 border-purple-500/30 bg-slate-900/50 backdrop-blur-sm overflow-hidden flex items-center justify-center">
                            <Image src={"/Profile_photo.png"} alt="Profile Photo" fill={true} className="object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}