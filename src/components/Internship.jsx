import Section from './Section.jsx'
import { internship } from '../data.js'

export default function Internship() {
  return (
    <Section id="internship" title="Internship">
      <article className="card max-w-3xl">
        <h3 className="font-display text-xl font-semibold text-white">{internship.role}</h3>
        <p className="mt-1 text-indigo-200">{internship.company}</p>
        <p className="mt-1 text-sm text-slate-400">Duration: {internship.duration}</p>
        <ul className="mt-5 space-y-3">
          {internship.points.map((p) => (
            <li key={p} className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </article>
    </Section>
  )
}
