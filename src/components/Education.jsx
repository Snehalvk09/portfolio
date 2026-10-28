import Section from './Section.jsx'
import { education } from '../data.js'

export default function Education() {
  return (
    <Section id="education" title="Education">
      <ol className="relative max-w-3xl space-y-6 border-l border-indigo-400/30 pl-8">
        {education.map(({ title, year, result }) => (
          <li key={title} className="relative">
            <span aria-hidden="true" className="absolute -left-[41px] top-6 h-4 w-4 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple shadow-glow" />
            <div className="card">
              <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
              <p className="mt-1 text-slate-400">{year}</p>
              <p className="mt-2 text-indigo-200">{result}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
