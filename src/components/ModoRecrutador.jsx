import { useState } from 'react'
import { createPortal } from 'react-dom'
import { FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'

function ModoRecrutador() {
  const [aberto, setAberto] = useState(false)

  const irPara = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setAberto(false)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setAberto(true)}
        className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-400"
      >
        Modo recrutador
      </button>

      {/* Portal: renderiza o modal fora da navbar, direto no body */}
      {aberto &&
        createPortal(
          <div
            onClick={() => setAberto(false)}
            className="fixed inset-0 z-[200] overflow-y-auto bg-black/70 p-4 backdrop-blur-sm"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative mx-auto my-8 w-full max-w-2xl rounded-2xl border border-borda bg-bg p-7"
            >
              <button
                onClick={() => setAberto(false)}
                aria-label="Fechar"
                className="absolute right-4 top-4 text-2xl text-texto-suave hover:text-texto"
              >
                <FaTimes />
              </button>

              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500">
                Resumo rápido
              </p>
              <h2 className="mb-1 text-2xl font-bold text-texto">
                Bruno Alves Claro — Full Stack
              </h2>
              <p className="mb-6 text-texto-suave">
                Crio sistemas reais: interface, banco de dados, automações, IA e
                deploy em produção.
              </p>

              {/* Principais skills */}
              <div className="mb-5">
                <h3 className="mb-2 font-bold text-texto">Principais skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'MySQL', 'APIs', 'IA', 'VPS / Deploy'].map(
                    (t) => (
                      <span
                        key={t}
                        className="rounded-md bg-indigo-500/15 px-3 py-1 text-sm text-indigo-300"
                      >
                        {t}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Melhores projetos */}
              <div className="mb-6">
                <h3 className="mb-2 font-bold text-texto">Melhores projetos</h3>
                <ul className="space-y-2 text-sm">
                  <li className="rounded-lg border border-borda bg-card px-4 py-3 text-texto">
                    <strong>Seven Plus</strong> — sistema interno com IA, CRM e
                    automações ·{' '}
                    <span className="text-emerald-400">Em produção</span>
                  </li>
                  <li className="rounded-lg border border-borda bg-card px-4 py-3 text-texto">
                    <strong>Dashboard RD Station</strong> — métricas, leads e ROI
                    · <span className="text-emerald-400">Em produção</span>
                  </li>
                </ul>
              </div>

              {/* Ações rápidas */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => irPara('destaque')}
                  className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-400"
                >
                  Ver Seven Plus
                </button>
                <a
                  href="https://github.com/Brunin14"
                  target="_blank"
                  className="flex items-center gap-2 rounded-lg border border-borda px-4 py-2 text-sm font-semibold text-texto hover:border-indigo-500"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  className="flex items-center gap-2 rounded-lg border border-borda px-4 py-2 text-sm font-semibold text-texto hover:border-indigo-500"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}

export default ModoRecrutador