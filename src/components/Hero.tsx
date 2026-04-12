import { useEffect, useState } from 'react'

const roles = [
    'Flutter App Developer',
    'Java Developer',
    'Problem Solver',
]

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0)
    const [displayed, setDisplayed] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const current = roles[roleIndex]
        let timeout: ReturnType<typeof setTimeout>

        if (!isDeleting && displayed.length < current.length) {
            timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
        } else if (!isDeleting && displayed.length === current.length) {
            timeout = setTimeout(() => setIsDeleting(true), 2000)
        } else if (isDeleting && displayed.length > 0) {
            timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40)
        } else if (isDeleting && displayed.length === 0) {
            setIsDeleting(false)
            setRoleIndex((i) => (i + 1) % roles.length)
        }

        return () => clearTimeout(timeout)
    }, [displayed, isDeleting, roleIndex])

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
            {/* Radial glow bg */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 60% 60% at 50% 40%, rgba(0,245,255,0.06) 0%, transparent 70%)',
                }}
            />

            {/* Decorative lines */}
            <div className="absolute left-0 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,245,255,0.2), transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,245,255,0.2), transparent)' }} />

            <div className="max-w-5xl w-full mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left — Text */}
                    <div>
                        {/* Status */}
                        <div className="flex items-center gap-3 mb-8 animate-fade-up">
                            <div className="status-dot" />
                            <span className="font-mono-custom text-xs" style={{ color: 'var(--green)', letterSpacing: '0.15em' }}>
                                AVAILABLE FOR WORK
                            </span>
                        </div>

                        {/* Greeting */}
                        <p className="section-tag mb-3 animate-fade-up delay-100">Hello, I'm</p>

                        {/* Name */}
                        <h1
                            className="text-5xl md:text-7xl font-extrabold leading-none mb-2 animate-fade-up delay-200"
                            style={{ fontFamily: 'Syne, sans-serif', color: '#ffffff' }}
                        >
                            Mohammad
                            <br />
                            <span style={{ color: 'var(--cyan)' }} className="glow-cyan">
                                Faisal
                            </span>
                        </h1>

                        {/* Typewriter role */}
                        <div className="flex items-center gap-2 mt-4 mb-6 animate-fade-up delay-300 h-8">
                            <span className="font-mono-custom text-base" style={{ color: 'var(--green)' }}>
                                &gt;_{' '}
                            </span>
                            <span className="font-mono-custom text-base" style={{ color: 'var(--text)' }}>
                                {displayed}
                            </span>
                            <span className="animate-blink font-mono-custom" style={{ color: 'var(--cyan)' }}>|</span>
                        </div>

                        {/* Bio */}
                        <p className="text-base leading-relaxed mb-8 animate-fade-up delay-400" style={{ color: 'var(--muted)', maxWidth: '480px' }}>
                            Passionate mobile app developer from <span style={{ color: 'var(--cyan)' }}>Chattogram, Bangladesh</span>, crafting
                            high-performance <span style={{ color: 'var(--cyan)' }}>Flutter apps</span>, and robust Java backends. I turn ideas into
                            beautiful, functional digital experiences.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 animate-fade-up delay-500">
                            <a
                                href="#projects"
                                className="btn-glow px-6 py-3 font-mono-custom text-sm font-bold"
                                style={{
                                    background: 'var(--cyan)',
                                    color: 'var(--dark)',
                                    letterSpacing: '0.1em',
                                }}
                            >
                                VIEW PROJECTS
                            </a>
                            <a
                                href="#contact"
                                className="px-6 py-3 font-mono-custom text-sm border transition-all duration-300 hover:bg-white/5"
                                style={{
                                    borderColor: 'var(--border)',
                                    color: 'var(--text)',
                                    letterSpacing: '0.1em',
                                }}
                            >
                                CONTACT ME
                            </a>
                        </div>

                        {/* Social links */}
                        <div className="flex gap-6 mt-8 animate-fade-up delay-600">
                            {[
                                { label: 'GitHub', href: 'https://github.com/Faisal60177' },
                                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohammad-faisal-7b65ab3b6?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
                                { label: 'Email', href: 'mailto:mohammadfaisal60177@gmail.com' },
                            ].map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-mono-custom text-xs transition-colors duration-300"
                                    style={{ color: 'var(--muted)', letterSpacing: '0.05em' }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cyan)')}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
                                >
                                    {s.label} ↗
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right — Visual card */}
                    <div className="hidden md:flex justify-center">
                        <div className="relative animate-float">

                            {/* Photo frame */}
                            <div
                                className="w-72 h-72 relative overflow-hidden"
                                style={{
                                    border: '1px solid rgba(0,245,255,0.3)',
                                    background: 'var(--card)',
                                }}
                            >
                                {/* Corner accents */}
                                {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((pos, i) => (
                                    <div
                                        key={i}
                                        className={`absolute w-4 h-4 ${pos}`}
                                        style={{
                                            borderTop: i < 2 ? '2px solid var(--cyan)' : 'none',
                                            borderBottom: i >= 2 ? '2px solid var(--cyan)' : 'none',
                                            borderLeft: i % 2 === 0 ? '2px solid var(--cyan)' : 'none',
                                            borderRight: i % 2 === 1 ? '2px solid var(--cyan)' : 'none',
                                            zIndex: 10,
                                        }}
                                    />
                                ))}

                                {/* Profile photo — shows if /public/profile.png exists */}
                                <img
                                    src="/profile.png"
                                    alt="Mohammad Faisal"
                                    className="w-full h-full object-cover"
                                    style={{ position: 'relative', zIndex: 5 }}
                                    onError={(e) => {
                                        (e.currentTarget as HTMLImageElement).style.display = 'none'
                                        const fallback = document.getElementById('hero-fallback')
                                        if (fallback) fallback.style.display = 'flex'
                                    }}
                                />

                                {/* Fallback avatar — hidden if photo loads */}
                                <div
                                    id="hero-fallback"
                                    className="absolute inset-0 flex-col items-center justify-center"
                                    style={{ display: 'none', background: 'var(--card)', zIndex: 4 }}
                                >
                                    <div
                                        className="w-24 h-24 rounded-full flex items-center justify-center text-4xl mb-4"
                                        style={{ background: 'rgba(0,245,255,0.1)', border: '2px solid rgba(0,245,255,0.3)' }}
                                    >
                                        👨‍💻
                                    </div>
                                    <p className="font-mono-custom text-xs" style={{ color: 'var(--muted)' }}>
                                        Add your photo to
                                    </p>
                                    <p className="font-mono-custom text-xs" style={{ color: 'var(--cyan)' }}>
                                        /public/profile.png
                                    </p>
                                </div>
                            </div>

                            {/* Floating badges */}
                            <div
                                className="absolute -bottom-4 -left-8 px-4 py-2 font-mono-custom text-xs"
                                style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--green)' }}
                            >
                                📱 Flutter Expert
                            </div>
                            <div
                                className="absolute -top-4 -right-8 px-4 py-2 font-mono-custom text-xs"
                                style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--cyan)' }}
                            >
                                ☕ Java Dev
                            </div>

                        </div>
                    </div>

                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up delay-700">
                    <span className="font-mono-custom text-xs" style={{ color: 'var(--muted)', letterSpacing: '0.2em' }}>SCROLL</span>
                    <div className="w-px h-12" style={{ background: 'linear-gradient(to bottom, var(--muted), transparent)' }} />
                </div>

            </div>
        </section>
    )
}