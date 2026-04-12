import { useState } from 'react'

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e: React.MouseEvent) => {
        e.preventDefault()
        setStatus('sending')

        // Using Formspree (free) — replace YOUR_FORM_ID
        try {
            const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })
            if (res.ok) {
                setStatus('sent')
                setForm({ name: '', email: '', subject: '', message: '' })
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    const inputStyle: React.CSSProperties = {
        background: 'var(--card)',
        border: '1px solid var(--border)',
        color: 'var(--text)',
        fontFamily: 'Space Mono, monospace',
        fontSize: '0.8rem',
        outline: 'none',
        width: '100%',
        padding: '12px 16px',
        transition: 'border-color 0.3s',
    }

    const contacts = [
        { icon: '📧', label: 'Email', value: 'mohammadfaisal60177@gmail', href: 'mailto:mohammadfaisal60177@gmail.com' },
        { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/Mohammad Faisal', href: 'https://www.linkedin.com/in/mohammad-faisal-7b65ab3b6?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
        { icon: '🐱', label: 'GitHub', value: 'https://github.com/Faisal60177', href: 'https://github.com/Faisal60177' },
        { icon: '📍', label: 'Location', value: 'Chattogram, Bangladesh', href: '#' },
    ]

    return (
        <section id="contact" className="py-28 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="section-tag mb-3">05 / Contact</p>
                    <h2
                        className="text-4xl font-extrabold mb-4"
                        style={{ fontFamily: 'Syne, sans-serif', color: '#ffffff' }}
                    >
                        Let's <span style={{ color: 'var(--cyan)' }}>Work Together</span>
                    </h2>
                    <p style={{ color: 'var(--muted)' }}>
                        Have a project in mind? Let's build something amazing together.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left — contact info */}
                    <div>
                        <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--muted)' }}>
                            I'm currently available for{' '}
                            <span style={{ color: 'var(--cyan)' }}>freelance projects</span> and{' '}
                            <span style={{ color: 'var(--green)' }}>full-time or part-time roles</span>. Whether you need a
                            <span style={{ color: 'var(--green)' }}>Flutter mobile app</span>, a Java backend, or a complete product — I'd love to hear from you.
                        </p>

                        <div className="space-y-4">
                            {contacts.map((c) => (
                                <a
                                    key={c.label}
                                    href={c.href}
                                    target={c.href.startsWith('http') ? '_blank' : undefined}
                                    rel="noreferrer"
                                    className="flex items-center gap-4 p-4 card-glow group"
                                    style={{ background: 'var(--card)', textDecoration: 'none' }}
                                >
                                    <span className="text-xl">{c.icon}</span>
                                    <div>
                                        <p className="font-mono-custom text-xs mb-0.5" style={{ color: 'var(--muted)' }}>
                                            {c.label}
                                        </p>
                                        <p className="text-sm font-bold" style={{ color: 'var(--text)' }}>
                                            {c.value}
                                        </p>
                                    </div>
                                    <span className="ml-auto font-mono-custom text-xs" style={{ color: 'var(--cyan)' }}>
                    ↗
                  </span>
                                </a>
                            ))}
                        </div>

                        {/* Availability */}
                        <div
                            className="mt-8 p-4 flex items-center gap-3"
                            style={{
                                background: 'rgba(0,255,136,0.05)',
                                border: '1px solid rgba(0,255,136,0.2)',
                            }}
                        >
                            <div className="status-dot" />
                            <div>
                                <p className="font-mono-custom text-xs" style={{ color: 'var(--green)' }}>
                                    AVAILABLE FOR WORK
                                </p>
                                <p className="font-mono-custom text-xs mt-0.5" style={{ color: 'var(--muted)' }}>
                                    Response time: within 24 hours
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right — contact form */}
                    <div
                        className="p-8"
                        style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
                    >
                        <p className="font-mono-custom text-xs mb-6" style={{ color: 'var(--cyan)' }}>
                            // Send a message
                        </p>

                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="font-mono-custom text-xs block mb-2" style={{ color: 'var(--muted)' }}>
                                        Name *
                                    </label>
                                    <input
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        style={inputStyle}
                                        onFocus={(e) => (e.target.style.borderColor = 'var(--cyan)')}
                                        onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                                    />
                                </div>
                                <div>
                                    <label className="font-mono-custom text-xs block mb-2" style={{ color: 'var(--muted)' }}>
                                        Email *
                                    </label>
                                    <input
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="Your email.com"
                                        style={inputStyle}
                                        onFocus={(e) => (e.target.style.borderColor = 'var(--cyan)')}
                                        onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="font-mono-custom text-xs block mb-2" style={{ color: 'var(--muted)' }}>
                                    Subject
                                </label>
                                <input
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                    placeholder="Project inquiry, collaboration..."
                                    style={inputStyle}
                                    onFocus={(e) => (e.target.style.borderColor = 'var(--cyan)')}
                                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                                />
                            </div>

                            <div>
                                <label className="font-mono-custom text-xs block mb-2" style={{ color: 'var(--muted)' }}>
                                    Message *
                                </label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows={5}
                                    placeholder="Tell me about your project..."
                                    style={{ ...inputStyle, resize: 'none' }}
                                    onFocus={(e) => (e.target.style.borderColor = 'var(--cyan)')}
                                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                                />
                            </div>

                            <button
                                onClick={handleSubmit}
                                disabled={status === 'sending' || status === 'sent'}
                                className="w-full py-3 font-mono-custom text-sm font-bold transition-all duration-300"
                                style={{
                                    background: status === 'sent' ? 'var(--green)' : 'var(--cyan)',
                                    color: 'var(--dark)',
                                    letterSpacing: '0.1em',
                                    cursor: status === 'sending' ? 'wait' : 'pointer',
                                    opacity: status === 'sending' ? 0.7 : 1,
                                }}
                            >
                                {status === 'idle' && 'SEND MESSAGE →'}
                                {status === 'sending' && 'SENDING...'}
                                {status === 'sent' && '✓ MESSAGE SENT!'}
                                {status === 'error' && 'ERROR — TRY AGAIN'}
                            </button>

                            {status === 'error' && (
                                <p className="font-mono-custom text-xs text-center" style={{ color: '#ff5f57' }}>
                                    Something went wrong. Please email me directly.
                                </p>
                            )}

                            <p className="font-mono-custom text-xs text-center" style={{ color: 'var(--muted)' }}>
                                Or email me directly at{' '}
                                <a href="mailto:mohammadfaisal60177@gmail" style={{ color: 'var(--cyan)' }}>
                                    mohammadfaisal60177@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}