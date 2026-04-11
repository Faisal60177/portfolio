import { useState, useEffect } from 'react'

const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
            style={{
                background: scrolled ? 'rgba(5,10,14,0.95)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(0,245,255,0.1)' : 'none',
            }}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="font-mono-custom text-lg font-bold" style={{ color: 'var(--cyan)' }}>
                    &lt;YourName /&gt;
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a key={link.label} href={link.href} className="nav-link">
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="font-mono-custom text-xs px-4 py-2 border btn-glow"
                        style={{
                            borderColor: 'var(--cyan)',
                            color: 'var(--cyan)',
                            letterSpacing: '0.1em',
                        }}
                    >
                        Resume ↗
                    </a>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="block w-6 h-0.5 transition-all duration-300" style={{ background: menuOpen ? 'var(--cyan)' : 'var(--text)', transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : '' }} />
                    <span className="block w-6 h-0.5 transition-all duration-300" style={{ background: 'var(--cyan)', opacity: menuOpen ? 0 : 1 }} />
                    <span className="block w-6 h-0.5 transition-all duration-300" style={{ background: menuOpen ? 'var(--cyan)' : 'var(--text)', transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : '' }} />
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ background: 'rgba(5,10,14,0.98)' }}>
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="nav-link text-base"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="font-mono-custom text-xs px-4 py-2 border text-center"
                        style={{ borderColor: 'var(--cyan)', color: 'var(--cyan)' }}
                    >
                        Resume ↗
                    </a>
                </div>
            )}
        </nav>
    )
}