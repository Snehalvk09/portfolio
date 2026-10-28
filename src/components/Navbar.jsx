import { useState } from 'react'
import { navLinks, profile } from '../data.js'
import { MenuIcon, CloseIcon } from './Icons.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy-900/80 backdrop-blur-md">
      <nav aria-label="Main navigation" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="font-display text-lg font-bold text-white" onClick={close}>
          {profile.name}
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="text-sm font-medium text-slate-300 transition hover:text-white">{label}</a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-lg p-2 text-white lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t border-white/10 bg-navy-900 px-5 pb-4 lg:hidden">
          {navLinks.map(([label, href]) => (
            <li key={href}>
              <a href={href} onClick={close} className="block py-3 text-base font-medium text-slate-200 hover:text-white">{label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
