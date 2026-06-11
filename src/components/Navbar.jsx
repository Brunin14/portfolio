import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import ModoRecrutador from './ModoRecrutador'

function Navbar() {
  const [aberto, setAberto] = useState(false)

  const links = [
    { id: 'home', label: 'Início' },
    { id: 'problemas', label: 'O que faço' },
    { id: 'skills', label: 'Skills' },
    { id: 'destaque', label: 'Seven Plus' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'certificados', label: 'Certificados' },
    { id: 'contato', label: 'Contato' },
  ]

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-borda bg-bg/85 px-8 py-4 backdrop-blur-md">
      <a href="#topo" className="text-2xl font-bold text-texto">
        Bruno<span className="text-indigo-500">.dev</span>
      </a>

      <div className="flex items-center gap-4">
        <ul
          className={`${
            aberto ? 'flex' : 'hidden'
          } absolute inset-x-0 top-full flex-col gap-4 border-b border-borda bg-bg px-8 py-4 md:static md:flex md:flex-row md:gap-8 md:border-0 md:bg-transparent md:p-0`}
        >
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setAberto(false)}
                className="font-medium text-texto-suave transition-colors hover:text-indigo-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ModoRecrutador />
        <ThemeToggle />

        <button
          className="text-2xl text-texto md:hidden"
          onClick={() => setAberto((v) => !v)}
          aria-label="Abrir menu"
        >
          {aberto ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar