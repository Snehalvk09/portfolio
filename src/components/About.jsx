import Section from './Section.jsx'
import { profile } from '../data.js'

export default function About() {
  return (
    <Section id="about" title="About Me">
      <p className="max-w-3xl text-lg leading-relaxed text-slate-300">{profile.about}</p>
    </Section>
  )
}
