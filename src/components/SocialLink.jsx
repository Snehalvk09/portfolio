// Renders an icon link. If the URL is empty, shows a disabled placeholder instead of a broken link.
export default function SocialLink({ href, label, children }) {
  const base = 'flex h-11 w-11 items-center justify-center rounded-full border transition duration-300'
  if (!href) {
    return (
      <span role="link" aria-disabled="true" aria-label={`${label} (link not added yet)`} title={`${label}: link coming soon`}
        className={`${base} cursor-not-allowed border-white/10 text-slate-500`}>
        {children}
      </span>
    )
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}
      className={`${base} border-indigo-400/40 text-indigo-100 hover:border-indigo-300 hover:bg-indigo-400/10 hover:shadow-glow`}>
      {children}
    </a>
  )
}
