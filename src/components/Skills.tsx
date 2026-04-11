import { useEffect, useRef, useState } from 'react'

const skillCategories = [
    {
        title: 'Mobile Development',
        icon: '📱',
        color: 'var(--cyan)',
        skills: [
            { name: 'Flutter', level: 90 },
            { name: 'Dart', level: 88 },
            { name: 'Android SDK', level: 75 },
            { name: 'iOS (via Flutter)', level: 72 },
        ],
    },
    {
        title: 'Backend / Java',
        icon: '☕',
        color: 'var(--green)',
        skills: [
            { name: 'Java', level: 85 },
            { name: 'Spring Boot', level: 78 },
            { name: 'REST APIs', level: 82 },
            { name: 'MySQL / PostgreSQL', level: 70 },
        ],
    },
    {
        title: 'Flutter Ecosystem',
        icon: '🔵',
        color: '#7c83fd',
        skills: [
            { name: 'BLoC / Cubit', level: 85 },
            { name: 'Provider / Riverpod', level: 80 },
            { name: 'Firebase', level: 78 },
            { name: 'GetX', level: 75 },
        ],
    },
]

const tools = [
    'Android Studio', 'IntelliJ IDEA', 'VS Code', 'Git & GitHub',
    'Firebase', 'Postman', 'Figma', 'REST APIs',
    'SQLite', 'Hive', 'Docker (basics)', 'CI/CD',
]

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
    const [width, setWidth] = useState(0)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setWidth(level) },
            { threshold: 0.3 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [level])

    return (
        <div ref={ref} className="mb-5">
            <div className="flex justify-between mb-2">
                <span className="font-mono-custom text-xs" style={{ color: 'var(--text)' }}>{name}</span>
                <span className="font-mono-custom text-xs" style={{ color }}>{level}%</span>
            </div>
            <div className="skill-bar">
                <div
                    className="skill-fill"
                    style={{
                        width: `${width}%`,
                        background: `linear-gradient(90deg, ${color}, ${color}88)`,
                    }}
                />
            </div>
        </div>
    )
}

export default function Skills() {
    return (
        <section id="skills" className="py-28 px-6" style={{ background: 'rgba(0,0,0,0.2)' }}>
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="section-tag mb-3">02 / Skills</p>
                    <h2
                        className="text-4xl font-extrabold"
                        style={{ fontFamily: 'Syne, sans-serif', color: '#ffffff' }}
                    >
                        My <span style={{ color: 'var(--cyan)' }}>Tech Stack</span>
                    </h2>
                </div>

                {/* Skill categories */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {skillCategories.map((cat) => (
                        <div
                            key={cat.title}
                            className="p-6 card-glow"
                            style={{ background: 'var(--card)' }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-2xl">{cat.icon}</span>
                                <h3
                                    className="font-bold text-base"
                                    style={{ fontFamily: 'Syne', color: cat.color }}
                                >
                                    {cat.title}
                                </h3>
                            </div>
                            {cat.skills.map((skill) => (
                                <SkillBar key={skill.name} {...skill} color={cat.color} />
                            ))}
                        </div>
                    ))}
                </div>

                {/* Tools grid */}
                <div>
                    <p
                        className="font-mono-custom text-xs text-center mb-6"
                        style={{ color: 'var(--muted)', letterSpacing: '0.2em' }}
                    >
                        — TOOLS & TECHNOLOGIES —
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {tools.map((tool) => (
                            <span
                                key={tool}
                                className="font-mono-custom text-xs px-4 py-2 transition-all duration-300 cursor-default"
                                style={{
                                    background: 'var(--card)',
                                    border: '1px solid var(--border)',
                                    color: 'var(--muted)',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--cyan)'
                                    e.currentTarget.style.color = 'var(--cyan)'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--border)'
                                    e.currentTarget.style.color = 'var(--muted)'
                                }}
                            >
                {tool}
              </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}