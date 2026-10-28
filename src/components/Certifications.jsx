import Section from './Section.jsx'
import { certifications } from '../data.js'

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c) => (
          <li key={c} className="card font-display font-semibold text-white">{c}</li>
        ))}
      </ul>
    </Section>
  )
}
