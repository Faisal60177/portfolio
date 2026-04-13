import { useState } from 'react'

const projects = [
    {
        id: 1,
        title: 'Deen Companion',
        category: 'Flutter',
        description:
            'A comprehensive Islamic companion app featuring real-time Prayer Times, full Quran Reader and bookmarks, Duas library, digital Tasbih counter with haptic feedback, Qibla compass, Hijri calendar, and Firebase-synced user profiles — all wrapped in a beautiful dark Islamic UI with Arabic typography.',
        tech: ['Flutter', 'Dart', 'Firebase', 'GetX', 'Firestore', 'GPS / Compass', 'Local Notifications'],
        github: 'https://github.com/Faisal60177/islami_app/tree/update_1',
        demo: '#',
        color: 'var(--green)',
        icon: '🕌',
        featured: true,
    },

    {
        id: 2,
        title: 'DoAll Notes',
        category: 'Flutter',
        description:
            'A full-featured notes app with real-time Firebase sync, complete CRUD operations, multi-color note theming, tag system with filtering, pin and archive support, bulk multi-select actions, grid and list view toggle, and a rich note editor with word count. Features Google and email authentication with Firestore-backed user profiles, offline-aware reactive streams, and a beautiful dark Islamic green UI with responsive layouts for phones and tablets.',
        tech: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'GetX', 'Firebase Auth'],
        github: 'https://github.com/Faisal60177/DO_ALL_NOTES',
        demo: '#',
        color: 'var(--green)',
        icon: '📝',
        featured: true,
    },

    {
        id: 3,
        title: 'Student Management System',
        category: 'Java',
        description:
            'A full-stack web-based Student Management System with two dedicated panels — Student and Admin/Teacher. Students can view their grades, results, registered courses, and attendance records. Admins and teachers can manage attendance, publish results, handle course registrations, and oversee student data. Built with Java backend and a clean HTML, CSS, and JavaScript frontend.',
        tech: ['Java', 'HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/Faisal60177/Student_Management',
        demo: '#',
        color: 'var(--cyan)',
        icon: '🎓',
        featured: false,
    },
    {
        id: 4,
        title: 'Calculator',
        category: 'Flutter',
        description:
            'A clean and responsive calculator app built with Flutter featuring standard arithmetic operations, a smooth button press UI with haptic feedback, expression history, and an elegant dark-themed interface optimized for all screen sizes.',
        tech: ['Flutter', 'Dart'],
        github: 'https://github.com/Faisal60177/Flutter-App-Development/tree/class-24-ToDo-Calculator-Counter',
        demo: '#',
        color: 'var(--cyan)',
        icon: '🧮',
        featured: false,
    },

    {
        id: 5,
        title: 'Country Explorer',
        category: 'Flutter',
        description:
            'A Flutter app that displays a comprehensive list of world countries with detailed information including flag, population, capital, and region. Features real-time search and filtering by region, smooth list scrolling, and a clean detail view for each country powered by the REST Countries API.',
        tech: ['Flutter', 'Dart', 'REST API', 'Dio'],
        github: 'https://github.com/Faisal60177/Flutter-App-Development/tree/class-28-Flutter-Country-list-app',
        demo: '#',
        color: 'var(--cyan)',
        icon: '🌍',
        featured: false,
    },
]

const filters = ['All', 'Flutter', 'Java']

export default function Projects() {
    const [active, setActive] = useState('All')

    const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

    return (
        <section id="projects" className="py-28 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <p className="section-tag mb-3">03 / Projects</p>
                    <h2
                        className="text-4xl font-extrabold mb-6"
                        style={{ fontFamily: 'Syne, sans-serif', color: '#ffffff' }}
                    >
                        Things I've <span style={{ color: 'var(--cyan)' }}>Built</span>
                    </h2>

                    {/* Filter tabs */}
                    <div className="flex justify-center gap-2">
                        {filters.map((f) => (
                            <button
                                key={f}
                                onClick={() => setActive(f)}
                                className="font-mono-custom text-xs px-5 py-2 transition-all duration-300"
                                style={{
                                    background: active === f ? 'var(--cyan)' : 'var(--card)',
                                    color: active === f ? 'var(--dark)' : 'var(--muted)',
                                    border: '1px solid',
                                    borderColor: active === f ? 'var(--cyan)' : 'var(--border)',
                                    letterSpacing: '0.1em',
                                }}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((project) => (
                        <div
                            key={project.id}
                            className="card-glow p-6 flex flex-col"
                            style={{ background: 'var(--card)' }}
                        >
                            {/* Top row */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="text-3xl">{project.icon}</div>
                                <div className="flex gap-3">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="font-mono-custom text-xs transition-colors duration-200"
                                        style={{ color: 'var(--muted)' }}
                                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cyan)')}
                                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
                                    >
                                        GitHub ↗
                                    </a>
                                    {project.demo !== '#' && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="font-mono-custom text-xs transition-colors duration-200"
                                            style={{ color: 'var(--muted)' }}
                                            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--green)')}
                                            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
                                        >
                                            Demo ↗
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Category */}
                            <span
                                className="font-mono-custom text-xs mb-2 self-start px-2 py-0.5"
                                style={{
                                    color: project.color,
                                    border: `1px solid ${project.color}44`,
                                    background: `${project.color}11`,
                                }}
                            >
                {project.category}
              </span>

                            {/* Title */}
                            <h3
                                className="text-lg font-bold mb-3"
                                style={{ fontFamily: 'Syne', color: '#ffffff' }}
                            >
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p
                                className="text-sm leading-relaxed mb-4 flex-1"
                                style={{ color: 'var(--muted)' }}
                            >
                                {project.description}
                            </p>

                            {/* Tech tags */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="font-mono-custom text-xs px-2 py-0.5"
                                        style={{
                                            background: 'rgba(255,255,255,0.04)',
                                            border: '1px solid var(--border)',
                                            color: 'var(--muted)',
                                        }}
                                    >
                    {t}
                  </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* View all on GitHub */}
                <div className="text-center mt-12">
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono-custom text-sm inline-flex items-center gap-2 transition-colors duration-300"
                        style={{ color: 'var(--muted)' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cyan)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
                    >
                        View all projects on GitHub →
                    </a>
                </div>
            </div>
        </section>
    )
}