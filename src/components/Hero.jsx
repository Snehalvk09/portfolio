import { profile } from '../data.js'
import { GitHubIcon, LinkedInIcon, DownloadIcon } from './Icons.jsx'
import SocialLink from './SocialLink.jsx'

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-96 w-96 animate-float rounded-full bg-brand-blue/25 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-40 h-96 w-96 animate-float rounded-full bg-brand-purple/25 blur-3xl [animation-delay:-3s]" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col-reverse items-center justify-center gap-12 px-5 pb-16 pt-28 sm:px-8 md:flex-row md:justify-between">
        <div className="max-w-2xl text-center md:text-left">
          <p className="animate-rise text-base font-medium text-indigo-200">Hello, I'm</p>
          <h1 id="hero-title" className="grad-text mt-2 animate-rise font-display text-5xl font-extrabold leading-tight [animation-delay:.1s] sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 animate-rise font-display text-lg font-semibold text-white [animation-delay:.2s] sm:text-xl">
            {profile.headline}
          </p>
          <p className="mx-auto mt-5 max-w-xl animate-rise text-base leading-relaxed text-slate-300 [animation-delay:.3s] md:mx-0">
            {profile.intro}
          </p>

          <div className="mt-8 flex animate-rise flex-wrap justify-center gap-3 [animation-delay:.4s] md:justify-start">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href={profile.resume} download="Snehal_Kale_Resume.pdf" className="btn btn-outline">
              <DownloadIcon className="h-4 w-4" /> Download Resume
            </a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>

          <div className="mt-8 flex animate-rise justify-center gap-3 [animation-delay:.5s] md:justify-start">
            <SocialLink href={profile.github} label="GitHub"><GitHubIcon /></SocialLink>
            <SocialLink href={profile.linkedin} label="LinkedIn"><LinkedInIcon /></SocialLink>
          </div>
        </div>

        <div aria-hidden="true" className="animate-rise [animation-delay:.3s]">
          <div className="rounded-full bg-gradient-to-br from-brand-blue to-brand-purple p-1 shadow-glow-lg">
            <div className="flex h-48 w-48 items-center justify-center rounded-full bg-navy-900 font-display text-6xl font-extrabold text-white sm:h-64 sm:w-64 sm:text-7xl">
              SK
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
