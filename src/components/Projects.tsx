import { useState } from 'react'

const projects = [
    {
        id: 1,
        title: 'ShopEase — E-Commerce App',
        category: 'Flutter',
        description:
            'A full-featured e-commerce mobile app with product listing, cart, payment gateway integration, and real-time order tracking. Built with Flutter and Firebase backend.',
        tech: ['Flutter', 'Dart', 'Firebase', 'BLoC', 'Stripe API'],
        github: 'https://github.com/yourusername/shopease',
        demo: '#',
        color: 'var(--cyan)',
        icon: '🛒',
        featured: true,
    },
    {
        id: 2,
        title: 'TaskFlow — Productivity App',
        category: 'Flutter',
        description:
            'A beautiful productivity and task management app with Kanban boards, reminders, team collaboration, and offline support using Hive local database.',
        tech: ['Flutter', 'Hive', 'Provider', 'Notifications', 'SQLite'],
        github: 'https://github.com/yourusername/taskflow',
        demo: '#',
        color: 'var(--green)',
        icon: '✅',
        featured: true,
    },
    {
        id: 3,
        title: 'HealthTrack API',
        category: 'Java',
        description:
            'A robust REST API for a health tracking app built with Spring Boot. Features JWT authentication, user health metrics, reports generation, and Swagger documentation.',
        tech: ['Java', 'Spring Boot', 'MySQL', 'JWT', 'Docker'],
        github: 'https://github.com/yourusername/healthtrack-api',
        demo: '#',
        color: '#ffd700',
        icon: '🏥',
        featured: true,
    },
    {
        id: 4,
        title: 'ChatApp — Messaging App',
        category: 'Flutter',
        description:
            'Real-time messaging app with Firebase Firestore, push notifications, image sharing, and group chats. Clean UI with smooth animations.',
        tech: ['Flutter', 'Firebase', 'FCM', 'GetX', 'Cloudinary'],
        github: 'https://github.com/yourusername/chatapp',
        demo: '#',
        color: '#7c83fd',
        icon: '💬',
        featured: false,
    },
    {
        id: 5,
        title: 'Student Management System',
        category: 'Java',
        description:
            'A desktop and web-based student management system with CRUD operations, attendance tracking, grade management, and PDF report generation.',
        tech: ['Java', 'Spring MVC', 'Hibernate', 'PostgreSQL', 'Thymeleaf'],
        github: 'https://github.com/yourusername/student-mgmt',
        demo: '#',
        color: 'var(--green)',
        icon: '🎓',
        featured: false,
    },
    {
        id: 6,
        title: 'Weather Now',
        category: 'Flutter',
        description:
            'A sleek weather app with animated UI, 7-day forecast, location-based weather, and multiple city tracking using OpenWeatherMap API.',
        tech: ['Flutter', 'OpenWeather API', 'Riverpod', 'Lottie'],
        github: 'https://github.com/yourusername/weather-now',
        demo: '#',
        color: 'var(--cyan)',
        icon: '🌤️',
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