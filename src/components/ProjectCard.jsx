import { GitHubIcon, ExternalIcon } from './Icons.jsx'

function LinkButton({ href, label, projectTitle, children, primary }) {
  const aria = `${label} for ${projectTitle}`
  if (!href) {
    return (
      <span role="link" aria-disabled="true" aria-label={`${aria} (link not added yet)`} title="Link coming soon" className="btn btn-disabled px-4 py-2">
        {children} {label}
      </span>
    )
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={aria} className={`btn px-4 py-2 ${primary ? 'btn-primary' : 'btn-outline'}`}>
      {children} {label}
    </a>
  )
}

export default function ProjectCard({ project }) {
  const { title, tech, description, github, demo } = project
  return (
    <article className="card flex flex-col transition duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:shadow-glow">
      <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 flex-1 leading-relaxed">{description}</p>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
        {tech.map((t) => (<li key={t} className="chip">{t}</li>))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-3">
        <LinkButton href={github} label="GitHub" projectTitle={title}><GitHubIcon className="h-4 w-4" /></LinkButton>
        <LinkButton href={demo} label="Live Demo" projectTitle={title} primary><ExternalIcon className="h-4 w-4" /></LinkButton>
      </div>
    </article>
  )
}
