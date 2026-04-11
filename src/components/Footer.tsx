export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer
            className="py-8 px-6"
            style={{ borderTop: '1px solid var(--border)' }}
        >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="font-mono-custom text-xs" style={{ color: 'var(--muted)' }}>
                    <span style={{ color: 'var(--cyan)' }}>&lt;YourName /&gt;</span>
                    {' '}— Flutter & Java Developer
                </div>

                <div className="font-mono-custom text-xs" style={{ color: 'var(--muted)' }}>
                    © {year} · Built with{' '}
                    <span style={{ color: 'var(--cyan)' }}>React</span> +{' '}
                    <span style={{ color: 'var(--green)' }}>Tailwind</span> · Deployed on{' '}
                    <span style={{ color: '#ffffff' }}>Vercel</span>
                </div>

                <div className="flex gap-4">
                    {[
                        { label: 'GitHub', href: 'https://github.com/yourusername' },
                        { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
                    ].map((l) => (
                        <a
                            key={l.label}
                            href={l.href}
                            target="_blank"
                            rel="noreferrer"
                            className="font-mono-custom text-xs transition-colors duration-200"
                            style={{ color: 'var(--muted)' }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cyan)')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
                        >
                            {l.label} ↗
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}