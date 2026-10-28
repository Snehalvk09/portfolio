export default function Section({ id, title, children, className = '' }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 ${className}`}>
      <h2 id={`${id}-title`} className="mb-10 font-display text-3xl font-bold text-white sm:text-4xl">
        {title}
        <span className="mt-3 block h-1 w-16 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple" />
      </h2>
      {children}
    </section>
  )
}
