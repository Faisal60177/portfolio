const stats = [
    { value: '2+', label: 'Years Experience' },
    { value: '15+', label: 'Apps Built' },
    { value: '10+', label: 'Happy Clients' },
    { value: '5★', label: 'Avg Rating' },
]

export default function About() {
    return (
        <section id="about" className="py-28 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left — Terminal card */}
                    <div
                        className="rounded-none"
                        style={{
                            background: 'var(--card)',
                            border: '1px solid var(--border)',
                        }}
                    >
                        {/* Terminal header */}
                        <div
                            className="flex items-center gap-2 px-4 py-3"
                            style={{ borderBottom: '1px solid var(--border)' }}
                        >
                            <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
                            <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
                            <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
                            <span className="ml-3 font-mono-custom text-xs" style={{ color: 'var(--muted)' }}>
                about_me.dart
              </span>
                        </div>

                        {/* Terminal content */}
                        <div className="p-6 font-mono-custom text-sm leading-8" style={{ color: 'var(--text)' }}>
                            <p style={{ color: 'var(--muted)' }}>// My Info</p>
                            <p>
                                <span style={{ color: 'var(--cyan)' }}>class </span>
                                <span style={{ color: 'var(--green)' }}>Developer </span>
                                {'{ '}
                            </p>
                            <div className="ml-4">
                                <p>
                                    <span style={{ color: 'var(--cyan)' }}>String </span>
                                    name = <span style={{ color: '#ffd700' }}>"Your Name"</span>;
                                </p>
                                <p>
                                    <span style={{ color: 'var(--cyan)' }}>String </span>
                                    location = <span style={{ color: '#ffd700' }}>"Chattogram, BD"</span>;
                                </p>
                                <p>
                                    <span style={{ color: 'var(--cyan)' }}>String </span>
                                    role = <span style={{ color: '#ffd700' }}>"Flutter Dev"</span>;
                                </p>
                                <p>
                                    <span style={{ color: 'var(--cyan)' }}>int </span>
                                    experience = <span style={{ color: '#ff8c00' }}>2</span>;
                                </p>
                                <p>
                                    <span style={{ color: 'var(--cyan)' }}>List</span>
                                    {'<String>'} loves = [
                                </p>
                                <div className="ml-4">
                                    <p><span style={{ color: '#ffd700' }}>"Flutter"</span>,</p>
                                    <p><span style={{ color: '#ffd700' }}>"Java"</span>,</p>
                                    <p><span style={{ color: '#ffd700' }}>"Clean Code"</span>,</p>
                                    <p><span style={{ color: '#ffd700' }}>"Coffee ☕"</span>,</p>
                                </div>
                                <p>];</p>
                            </div>
                            <p>{'}'}</p>
                            <p className="mt-2 animate-blink" style={{ color: 'var(--cyan)' }}>▋</p>
                        </div>
                    </div>

                    {/* Right — Text */}
                    <div>
                        <p className="section-tag mb-3">01 / About Me</p>
                        <h2
                            className="text-4xl font-extrabold mb-6"
                            style={{ fontFamily: 'Syne, sans-serif', color: '#ffffff' }}
                        >
                            Building apps that
                            <br />
                            <span style={{ color: 'var(--cyan)' }}>people love</span>
                        </h2>

                        <div className="space-y-4 mb-8" style={{ color: 'var(--muted)', lineHeight: '1.8' }}>
                            <p>
                                I'm a passionate <span style={{ color: 'var(--text)' }}>Flutter App Developer</span> and{' '}
                                <span style={{ color: 'var(--text)' }}>Java Developer</span> based in Chattogram, Bangladesh.
                                I specialize in building beautiful, performant mobile applications that run seamlessly
                                on both iOS and Android from a single codebase.
                            </p>
                            <p>
                                With a deep love for clean architecture and pixel-perfect UI, I craft apps using
                                Flutter with state management solutions like <span style={{ color: 'var(--cyan)' }}>BLoC</span>,{' '}
                                <span style={{ color: 'var(--cyan)' }}>Provider</span>, and{' '}
                                <span style={{ color: 'var(--cyan)' }}>Riverpod</span>. On the backend, I build
                                robust REST APIs with <span style={{ color: 'var(--green)' }}>Java Spring Boot</span>.
                            </p>
                            <p>
                                When I'm not coding, I'm exploring new Flutter packages, contributing to open source,
                                or drinking coffee and brainstorming the next big app idea.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="p-4 card-glow"
                                    style={{ background: 'var(--card)' }}
                                >
                                    <div
                                        className="text-3xl font-extrabold mb-1"
                                        style={{ fontFamily: 'Syne', color: 'var(--cyan)' }}
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="font-mono-custom text-xs" style={{ color: 'var(--muted)' }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}