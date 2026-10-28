import { useState } from 'react'
import Section from './Section.jsx'
import { profile } from '../data.js'
import { MailIcon, PhoneIcon, LinkedInIcon, DownloadIcon } from './Icons.jsx'

// Optional: set VITE_FORMSPREE_ID in .env to send messages straight to your inbox.
const FORM_ID = import.meta.env.VITE_FORMSPREE_ID

const field = 'mt-2 w-full rounded-xl border border-white/10 bg-navy-900/80 px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/40'

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ type: 'idle', text: '' })

  const onChange = (e) => setValues({ ...values, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!FORM_ID) {
      // Fallback: open the visitor's email app with the message pre-filled (no backend needed).
      const subject = encodeURIComponent(`Portfolio message from ${values.name}`)
      const body = encodeURIComponent(`${values.message}\n\nFrom: ${values.name} (${values.email})`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setStatus({ type: 'info', text: 'Your email app should open with the message ready to send.' })
      return
    }
    setStatus({ type: 'info', text: 'Sending…' })
    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error('Request failed')
      setValues({ name: '', email: '', message: '' })
      setStatus({ type: 'success', text: 'Message sent. Thank you!' })
    } catch {
      setStatus({ type: 'error', text: `Could not send the message. Please email ${profile.email} directly.` })
    }
  }

  const statusColor = status.type === 'error' ? 'text-red-300' : status.type === 'success' ? 'text-emerald-300' : 'text-indigo-200'

  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="max-w-md text-lg leading-relaxed">Have an opportunity or a question? Send me a message or reach out directly.</p>
          <a href={`mailto:${profile.email}`} className="card flex items-center gap-4 transition hover:border-indigo-400/40 hover:shadow-glow">
            <MailIcon className="h-6 w-6 text-indigo-300" /><span className="break-all">{profile.email}</span>
          </a>
          <a href={`tel:+91${profile.phone}`} className="card flex items-center gap-4 transition hover:border-indigo-400/40 hover:shadow-glow">
            <PhoneIcon className="h-6 w-6 text-indigo-300" /><span>{profile.phone}</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="card flex items-center gap-4 transition hover:border-indigo-400/40 hover:shadow-glow">
            <LinkedInIcon className="h-6 w-6 text-indigo-300" /><span className="break-all">linkedin.com/in/snehal-kale-834572344</span>
          </a>
          <a href={profile.resume} download="Snehal_Kale_Resume.pdf" className="btn btn-primary">
            <DownloadIcon className="h-4 w-4" /> Download Resume
          </a>
        </div>

        <form onSubmit={onSubmit} className="card space-y-5" aria-label="Contact form">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-white">Your name</label>
            <input id="name" name="name" type="text" required autoComplete="name" value={values.name} onChange={onChange} className={field} placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-white">Your email</label>
            <input id="email" name="email" type="email" required autoComplete="email" value={values.email} onChange={onChange} className={field} placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium text-white">Message</label>
            <textarea id="message" name="message" rows="5" required value={values.message} onChange={onChange} className={field} placeholder="How can I help?" />
          </div>
          <button type="submit" className="btn btn-primary w-full">Send message</button>
          <p role="status" aria-live="polite" className={`min-h-[1.25rem] text-sm ${statusColor}`}>{status.text}</p>
        </form>
      </div>
    </Section>
  )
}
