export default function Navbar({activeSection, scrollToSection}) {
    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Projects', id: 'projects' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <nav className="hidden md:block fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center h-16">
                    <div className="flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.id)}
                                className={`px-3 py-2 text-sm font-medium transition-all duration-300 border-b-2 ${activeSection === link.id
                                    ? 'text-purple-400 border-purple-400'
                                    : 'text-slate-400 hover:text-white border-transparent'
                                    }`}
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}