import Section from './Section.jsx'
import { skills } from '../data.js'

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ group, items }) => (
          <article key={group} className="card">
            <h3 className="mb-4 font-display text-lg font-semibold text-white">{group}</h3>
            <ul className="flex flex-wrap gap-2">
              {items.map((item) => (<li key={item} className="chip">{item}</li>))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
