const experiences = [
    {
        type: 'work',
        role: 'Flutter Developer (Freelance)',
        company: 'Self-Employed',
        period: '2023 — Present',
        location: 'Chattogram, Bangladesh',
        description: [
            'Developed 10+ Flutter apps for clients across e-commerce, healthcare, and education sectors',
            'Integrated REST APIs, Firebase, and third-party SDKs like payment gateways and maps',
            'Maintained 4.8★ average client rating on Fiverr / Upwork',
            'Delivered pixel-perfect UIs from Figma designs with smooth animations',
        ],
        color: 'var(--cyan)',
        icon: '📱',
    },
    {
        type: 'work',
        role: 'Junior Java Developer (Intern)',
        company: 'Tech Company Name',
        period: '2022 — 2023',
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
        company: 'Your University Name',
        period: '2019 — 2023',
        location: 'Chattogram, Bangladesh',
        description: [
            'Graduated with honors — CGPA: 3.7/4.0',
            'Specialized in Software Engineering and Mobile Application Development',
            'Final year project: Cross-platform health tracking app using Flutter',
            'Active member of the Programming Club',
        ],
        color: '#ffd700',
        icon: '🎓',
    },
]

const certifications = [
    { name: 'Flutter & Dart — The Complete Guide', issuer: 'Udemy', year: '2023', icon: '🏆' },
    { name: 'Java Programming Masterclass', issuer: 'Udemy', year: '2022', icon: '🏆' },
    { name: 'Spring Boot Microservices', issuer: 'Coursera', year: '2023', icon: '🏆' },
    { name: 'Firebase for Flutter', issuer: 'Google', year: '2023', icon: '🏆' },
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