import { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'

function CommandPalette() {
  const [aberto, setAberto] = useState(false)
  const [q, setQ] = useState('')

  const fechar = () => {
    setAberto(false)
    setQ('')
  }

  const irPara = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    fechar()
  }
  const abrir = (url) => {
    window.open(url, '_blank')
    fechar()
  }

  const acoes = [
    { label: 'Início', run: () => irPara('home') },
    { label: 'Problemas que eu resolvo', run: () => irPara('problemas') },
    { label: 'Skills / Tecnologias', run: () => irPara('skills') },
    { label: 'Seven Plus (destaque)', run: () => irPara('destaque') },
    { label: 'Projetos', run: () => irPara('projetos') },
    { label: 'Trajetória', run: () => irPara('trajetoria') },
    { label: 'Contato', run: () => irPara('contato') },
    { label: 'GitHub', run: () => abrir('https://github.com/Brunin14') },
    { label: 'LinkedIn', run: () => abrir('https://www.linkedin.com/in/bruno-alves-6456b7289/') },
  ]

  // Ctrl+K abre/fecha, Esc fecha
  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setAberto((v) => !v)
      }
      if (e.key === 'Escape') fechar()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  if (!aberto) return null

  const filtradas = acoes.filter((a) =>
    a.label.toLowerCase().includes(q.toLowerCase())
  )

  return (
    <div
      onClick={fechar}
      className="fixed inset-0 z-[200] flex items-start justify-center bg-black/60 p-4 pt-[15vh] backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg overflow-hidden rounded-2xl border border-borda bg-bg shadow-2xl"
      >
        <div className="flex items-center gap-3 border-b border-borda px-4 py-3">
          <FaSearch className="text-texto-suave" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar... (projetos, skills, contato)"
            className="flex-1 bg-transparent text-texto outline-none placeholder:text-texto-suave"
          />
          <kbd className="rounded border border-borda px-1.5 py-0.5 text-xs text-texto-suave">
            esc
          </kbd>
        </div>

        <ul className="max-h-72 overflow-y-auto p-2">
          {filtradas.length === 0 && (
            <li className="px-3 py-4 text-center text-sm text-texto-suave">
              Nada encontrado
            </li>
          )}
          {filtradas.map((a) => (
            <li key={a.label}>
              <button
                onClick={a.run}
                className="w-full rounded-lg px-3 py-2 text-left text-texto transition-colors hover:bg-card"
              >
                {a.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CommandPalette