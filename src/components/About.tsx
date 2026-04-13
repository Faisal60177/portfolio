const stats = [
    { value: '2+', label: 'Years Experience' },
    { value: '5+', label: 'Apps Built' },
    { value: '10+', label: 'Happy Clients' },
    { value: '4★', label: 'Avg Rating' },
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

                            <p style={{ color: 'var(--muted)' }}>// Assalamu Alaikum 🌙 — Welcome to my portfolio</p>

                            <p>
                                <span style={{ color: 'var(--cyan)' }}>class </span>
                                <span style={{ color: 'var(--green)' }}>MohammadFaisal </span>
                                <span style={{ color: 'var(--cyan)' }}>extends </span>
                                <span style={{ color: 'var(--green)' }}>FlutterDeveloper </span>
                                {'{ '}
                            </p>

                            <div className="ml-4">

                                <p style={{ color: 'var(--muted)' }}>// Identity</p>
                                <p>
                                    <span style={{ color: 'var(--cyan)' }}>final </span>
                                    <span style={{ color: 'var(--cyan)' }}>String </span>
                                    name = <span style={{ color: '#ffd700' }}>"Mohammad Faisal"</span>;
                                </p>
                                <p>
                                    <span style={{ color: 'var(--cyan)' }}>final </span>
                                    <span style={{ color: 'var(--cyan)' }}>String </span>
                                    location = <span style={{ color: '#ffd700' }}>"Chattogram, Bangladesh 🇧🇩"</span>;
                                </p>
                                <p>
                                    <span style={{ color: 'var(--cyan)' }}>final </span>
                                    <span style={{ color: 'var(--cyan)' }}>String </span>
                                    role = <span style={{ color: '#ffd700' }}>"Flutter Mobile Developer"</span>;
                                </p>
                                <p>
                                    <span style={{ color: 'var(--cyan)' }}>final </span>
                                    <span style={{ color: 'var(--cyan)' }}>int </span>
                                    experience = <span style={{ color: '#ff8c00' }}>2</span>;
                                    <span style={{ color: 'var(--muted)' }}> // years</span>
                                </p>

                                <p className="mt-2" style={{ color: 'var(--muted)' }}>// Primary Stack</p>
                                <p>
                                    <span style={{ color: 'var(--cyan)' }}>final </span>
                                    <span style={{ color: 'var(--cyan)' }}>List</span>
                                    {'<String>'} stack = [
                                </p>
                                <div className="ml-4">
                                    <p><span style={{ color: '#ffd700' }}>"Flutter"</span>, <span style={{ color: '#ffd700' }}>"Dart"</span>,</p>
                                    <p><span style={{ color: '#ffd700' }}>"Firebase"</span>, <span style={{ color: '#ffd700' }}>"Firestore"</span>,</p>
                                    <p><span style={{ color: '#ffd700' }}>"GetX"</span>, <span style={{ color: '#ffd700' }}>"BLoC"</span>, <span style={{ color: '#ffd700' }}>"Provider"</span>,</p>
                                    <p><span style={{ color: '#ffd700' }}>"REST API"</span>, <span style={{ color: '#ffd700' }}>"Dio"</span>,</p>
                                    <p><span style={{ color: '#4CAF82' }}>"Java"</span>, <span style={{ color: '#4CAF82' }}>"Spring Boot"</span>,</p>
                                </div>
                                <p>];</p>

                                <p className="mt-2" style={{ color: 'var(--muted)' }}>// Currently Building</p>
                                <p>
                                    <span style={{ color: 'var(--cyan)' }}>final </span>
                                    <span style={{ color: 'var(--cyan)' }}>String </span>
                                    currentProject = <span style={{ color: '#ffd700' }}>"Deen Companion 🕌"</span>;
                                    <span style={{ color: 'var(--muted)' }}> // Islamic app</span>
                                </p>

                                <p className="mt-2" style={{ color: 'var(--muted)' }}>// Values</p>
                                <p>
                                    <span style={{ color: 'var(--cyan)' }}>final </span>
                                    <span style={{ color: 'var(--cyan)' }}>List</span>
                                    {'<String>'} values = [
                                </p>
                                <div className="ml-4">
                                    <p><span style={{ color: '#ffd700' }}>"Clean Architecture"</span>,</p>
                                    <p><span style={{ color: '#ffd700' }}>"Pixel-Perfect UI"</span>,</p>
                                    <p><span style={{ color: '#ffd700' }}>"Purposeful Software"</span>,</p>
                                </div>
                                <p>];</p>

                                <p className="mt-2" style={{ color: 'var(--muted)' }}>// Fun fact</p>
                                <p>
                                    <span style={{ color: 'var(--cyan)' }}>bool </span>
                                    poweredBy = <span style={{ color: '#ff8c00' }}>true</span>;
                                    <span style={{ color: 'var(--muted)' }}> // coffee ☕ & curiosity</span>
                                </p>

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
                                I'm a passionate <span style={{ color: 'var(--text)' }}>Flutter Mobile App Developer</span> based in{' '}
                                <span style={{ color: 'var(--text)' }}>Chattogram, Bangladesh</span>, specialized in building
                                beautiful, high-performance Android applications. I craft pixel-perfect cross-platform experiences
                                using <span style={{ color: 'var(--cyan)' }}>Dart</span> and{' '}
                                <span style={{ color: 'var(--cyan)' }}>Flutter</span>, with a strong focus on clean architecture,
                                scalable code, and smooth user experiences that feel truly native.
                            </p>
                            <p>
                                My Flutter toolkit includes state management with{' '}
                                <span style={{ color: 'var(--cyan)' }}>GetX</span>,{' '}
                                <span style={{ color: 'var(--cyan)' }}>BLoC</span>,{' '}
                                <span style={{ color: 'var(--cyan)' }}>Cubit</span>, and{' '}
                                <span style={{ color: 'var(--cyan)' }}>Provider</span> — paired with{' '}
                                <span style={{ color: 'var(--cyan)' }}>Firebase</span> for real-time backends,
                                REST API integration, offline storage with{' '}
                                <span style={{ color: 'var(--cyan)' }}>SQLite</span> and{' '}
                                <span style={{ color: 'var(--cyan)' }}>Shared Preferences</span>,
                                and rich animations that bring interfaces to life.
                                I also work with <span style={{ color: 'var(--green)' }}>Java</span> and{' '}
                                <span style={{ color: 'var(--green)' }}>Spring Boot</span> when backend
                                work calls for it.
                            </p>
                            <p>
                                Currently building <span style={{ color: 'var(--text)' }}>Deen Companion</span> —
                                a full-featured <span style={{ color: 'var(--text)' }}>Islamic App</span> with Prayer Times, Quran Reader, Duas, Tasbih,
                                and Qibla — combining my love for Flutter with meaningful, purpose-driven software.
                                When I'm not coding, I'm exploring new Flutter packages, studying clean architecture
                                patterns, or brainstorming the next app that solves a real problem.
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