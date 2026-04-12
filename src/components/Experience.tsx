const experiences = [
    {
        type: 'work',
        role: 'Flutter App Developer (Freelance & Remote)',
        company: 'Self-Employed',
        period: '2024 — Present',
        location: 'Chattogram, Bangladesh',
        description: [
            'Experienced Flutter Developer skilled in building high-performance, cross-platform mobile apps.\n' +
            'Proficient in Dart, state management (State full widgets, BLoC, Cubit, Provider)',
            'Integrated REST APIs, Firebase, and third-party SDKs like payment gateways and maps',
            'Offline storage(SQLite, Shared Preference)',
            'Passionate about clean architecture, and writing scalable, maintainable code',
            'Always learning and staying updated with the latest in Flutter',
            'Maintained 4.8★ average client rating on Fiverr / Upwork',
            'Delivered pixel-perfect UIs from Figma designs with smooth animations',
            'Developed 5+ Flutter apps for clients across Islamic, e-commerce, healthcare, and education sectors',
        ],
        color: 'var(--cyan)',
        icon: '📱',
    },
    {
        type: 'work',
        role: 'Flutter App Developer',
        company: 'Self-Employed',
        period: '2025- 2026',
        location: 'Chattogram, Bangladesh',
        description: [
            'Built a full-stack Islamic productivity app using Flutter with Firebase backend, featuring real-time Firestore sync across all devices',
            'Implemented complete authentication system with email/password and Google Sign-In, including account linking, provider detection, and JWT-secured sessions via Firebase Auth',
            'Architected a reactive state management layer using GetX with persistent controllers, observable streams, and real-time Firestore listeners',
            'Developed a full-featured Notes module with CRUD operations, multi-color theming, tag system, pin/archive, bulk selection, grid/list views, and offline-first sync',
            'Designed a responsive, production-grade UI with Islamic aesthetics — dark green palette, Arabic typography (Amiri), Bismillah decorations, and adaptive layouts for mobile and tablet',
            'Built a secure multi-provider profile system supporting Google and email/password linking, silent re-authentication, and Firestore-backed user data management',
            'Implemented bottom navigation shell using IndexedStack for zero-rebuild tab switching, with modular placeholder architecture for future Tasks and Quran Reader features',
        ],
        color: 'var(--green)',
        icon: '☕',
    },

    {
        type: 'work',
        role: 'Java Developer',
        company: 'IIUC',
        period: '2025- 2026',
        location: 'Chattogram, Bangladesh',
        description: [
            'Built and maintained REST APIs using Spring Boot for internal tools',
            'Worked with MySQL databases, wrote optimized queries and stored procedures',
            'Participated in code reviews and followed agile development practices',
            'Implemented JWT-based authentication and authorization systems',
        ],
        color: 'var(--green)',
        icon: '☕',
    },
    {
        type: 'education',
        role: 'B.Sc. in Computer Science & Engineering',
        company: 'International Islamic University Chittagone',
        period: 'Spring 2024 — Autumn 2027',
        location: 'Chattogram, Bangladesh',
        description: [
            'I am studying B.Sc in Computer Science & Engineering(CSE) at International Islamic University Chittagone',
            'Specialized in Software Engineering and Mobile Application Development',
            '2nd year project: Islamic App with Flutter\n' +
            'Task and Notes App with Flutter\n' +
            'Student Management System with Jave\n',
            'Active member of the Programming Club',
        ],
        color: '#ffd700',
        icon: '🎓',
    },
]

const certifications = [
    { name: 'Flutter App Development  — Batch 4 ', issuer: 'Interactive Cares', year: '2025', icon: '🏆' },
    { name: 'Flutter & Dart — The Complete Guide', issuer: 'Udemy', year: '2025', icon: '🏆' },
    { name: 'Java Programming Beginner to Master', issuer: 'Udemy', year: '2025', icon: '🏆' },
]

export default function Experience() {
    return (
        <section id="experience" className="py-28 px-6" style={{ background: 'rgba(0,0,0,0.2)' }}>
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="section-tag mb-3">04 / Experience</p>
                    <h2
                        className="text-4xl font-extrabold"
                        style={{ fontFamily: 'Syne, sans-serif', color: '#ffffff' }}
                    >
                        My <span style={{ color: 'var(--cyan)' }}>Journey</span>
                    </h2>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div
                        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px hidden md:block"
                        style={{ background: 'linear-gradient(to bottom, var(--cyan), var(--green), transparent)' }}
                    />

                    <div className="space-y-12">
                        {experiences.map((exp, i) => (
                            <div
                                key={i}
                                className={`relative grid md:grid-cols-2 gap-8 items-start ${
                                    i % 2 === 0 ? '' : 'md:direction-rtl'
                                }`}
                            >
                                {/* Timeline dot */}
                                <div
                                    className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 mt-6 hidden md:block"
                                    style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}` }}
                                />

                                {/* Content */}
                                <div className={`md:col-span-1 ${i % 2 === 0 ? 'md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
                                    <div
                                        className="card-glow p-6"
                                        style={{ background: 'var(--card)' }}
                                    >
                                        {/* Period */}
                                        <div className="flex items-center justify-between mb-3">
                      <span
                          className="font-mono-custom text-xs px-2 py-1"
                          style={{
                              color: exp.color,
                              border: `1px solid ${exp.color}44`,
                              background: `${exp.color}11`,
                          }}
                      >
                        {exp.period}
                      </span>
                                            <span className="text-xl">{exp.icon}</span>
                                        </div>

                                        {/* Role */}
                                        <h3
                                            className="text-lg font-bold mb-1"
                                            style={{ fontFamily: 'Syne', color: '#ffffff' }}
                                        >
                                            {exp.role}
                                        </h3>

                                        {/* Company */}
                                        <p className="font-mono-custom text-xs mb-1" style={{ color: exp.color }}>
                                            {exp.company}
                                        </p>
                                        <p className="font-mono-custom text-xs mb-4" style={{ color: 'var(--muted)' }}>
                                            📍 {exp.location}
                                        </p>

                                        {/* Description */}
                                        <ul className="space-y-2">
                                            {exp.description.map((item, j) => (
                                                <li
                                                    key={j}
                                                    className="text-sm flex gap-2"
                                                    style={{ color: 'var(--muted)' }}
                                                >
                                                    <span style={{ color: exp.color, flexShrink: 0 }}>▸</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Empty column for alternating layout */}
                                {i % 2 === 0 && <div className="hidden md:block" />}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications */}
                <div className="mt-20">
                    <p
                        className="font-mono-custom text-xs text-center mb-8"
                        style={{ color: 'var(--muted)', letterSpacing: '0.2em' }}
                    >
                        — CERTIFICATIONS —
                    </p>
                    <div className="grid md:grid-cols-4 gap-4">
                        {certifications.map((cert) => (
                            <div
                                key={cert.name}
                                className="card-glow p-4 text-center"
                                style={{ background: 'var(--card)' }}
                            >
                                <div className="text-2xl mb-2">{cert.icon}</div>
                                <p className="text-xs font-bold mb-1" style={{ color: '#ffffff' }}>{cert.name}</p>
                                <p className="font-mono-custom text-xs" style={{ color: 'var(--cyan)' }}>{cert.issuer}</p>
                                <p className="font-mono-custom text-xs" style={{ color: 'var(--muted)' }}>{cert.year}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}