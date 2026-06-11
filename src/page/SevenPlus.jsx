import { useState, useRef, useEffect, Fragment } from 'react'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'
import imgSeven from '../assets/SevenPlus.png' // troque pela imagem real do sistema

// Fluxo de arquitetura com as caixas e setas aparecendo em sequência
function FluxoAnimado({ titulo, passos }) {
  const [ativo, setAtivo] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setAtivo(true), obs.disconnect()),
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const aparecer = (i) => ({
    opacity: ativo ? 1 : 0,
    transform: ativo ? 'translateY(0)' : 'translateY(8px)',
    transition: `opacity 0.4s ease-out ${i * 0.25}s, transform 0.4s ease-out ${i * 0.25}s`,
  })

  return (
    <div ref={ref} className="rounded-2xl border border-borda bg-soft p-5">
      <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-indigo-400">
        {titulo}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {passos.map((passo, i) => (
          <Fragment key={passo}>
            <div
              style={aparecer(i * 2)}
              className="rounded-lg border border-borda bg-card px-4 py-2 text-center text-sm text-texto"
            >
              {passo}
            </div>
            {i < passos.length - 1 && (
              <span
                style={aparecer(i * 2 + 1)}
                className="text-lg text-indigo-400"
              >
                →
              </span>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

function SevenPlus() {
  const antes = [
    'Processos manuais e repetitivos',
    'Dados espalhados em planilhas',
    'Documentos feitos na mão',
    'Sem visão centralizada',
  ]
  const depois = [
    'Fluxos automatizados',
    'Dados centralizados em banco',
    'Geração automática de documentos',
    'Dashboard único de gestão',
  ]
  const funcionalidades = [
    'Login e autenticação (JWT)',
    'CRM e gestão de clientes',
    'Formulários dinâmicos',
    'Geração de documentos',
    'Assistente com IA',
    'Dashboards de métricas',
  ]

  return (
    <section id="destaque" className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-10 text-center">
        <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-semibold text-indigo-300">
          Projeto em destaque
        </span>
        <h2 className="my-3 text-4xl font-bold text-texto">
          Case Study: Seven Plus
        </h2>
        <p className="mx-auto max-w-2xl text-texto-suave">
          Sistema interno desenvolvido para centralizar processos, documentos,
          IA, formulários e dashboards em uma única plataforma.
        </p>
      </div>

      {/* Imagem */}
      <div className="mb-10 overflow-hidden rounded-3xl border border-borda bg-soft">
        <img src={imgSeven} alt="Seven Plus" className="w-full object-cover" />
      </div>

      {/* Antes e depois */}
      <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-red-500/30 bg-card p-6">
          <h3 className="mb-4 flex items-center gap-2 font-bold text-red-400">
            <FaTimesCircle /> Antes
          </h3>
          <ul className="space-y-2">
            {antes.map((t) => (
              <li key={t} className="text-sm text-texto-suave">• {t}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-emerald-500/30 bg-card p-6">
          <h3 className="mb-4 flex items-center gap-2 font-bold text-emerald-400">
            <FaCheckCircle /> Depois
          </h3>
          <ul className="space-y-2">
            {depois.map((t) => (
              <li key={t} className="text-sm text-texto">• {t}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Blocos problema / solução / participação */}
      <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {[
          {
            t: 'O problema',
            d: 'A empresa precisava organizar formulários, documentos e dados espalhados, com muito trabalho manual.',
          },
          {
            t: 'A solução',
            d: 'Uma plataforma única com login, formulários, banco de dados, geração de documentos e IA.',
          },
          {
            t: 'Minha participação',
            d: 'Desenvolvi front-end e back-end, modelei o banco, integrei a IA e publiquei em produção na VPS.',
          },
        ].map((b) => (
          <div key={b.t} className="rounded-2xl border border-borda bg-card p-6">
            <h3 className="mb-2 font-bold text-indigo-400">{b.t}</h3>
            <p className="text-sm text-texto-suave">{b.d}</p>
          </div>
        ))}
      </div>

      {/* Funcionalidades */}
      <div className="mb-10">
        <h3 className="mb-4 text-lg font-bold text-texto">Funcionalidades</h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {funcionalidades.map((f) => (
            <div
              key={f}
              className="flex items-center gap-2 rounded-xl border border-borda bg-card px-4 py-3 text-sm text-texto"
            >
              <FaCheckCircle className="text-emerald-400" /> {f}
            </div>
          ))}
        </div>
      </div>

      {/* Arquitetura animada */}
      <h3 className="mb-4 text-lg font-bold text-texto">Arquitetura</h3>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <FluxoAnimado
          titulo="Sistema principal"
          passos={['Usuário', 'React', 'API Node', 'MySQL', 'Documento']}
        />
        <FluxoAnimado
          titulo="Chat com IA"
          passos={['Usuário', 'Chat', 'Flask + Gemini', 'Base', 'Resposta']}
        />
      </div>

      {/* Stack + resultado */}
      <div className="mt-10 flex flex-wrap gap-2">
        {['React', 'Node.js', 'MySQL', 'JWT', 'API', 'Flask', 'Gemini', 'NGINX', 'VPS'].map(
          (t) => (
            <span
              key={t}
              className="rounded-md bg-indigo-500/15 px-3 py-1 text-xs text-indigo-300"
            >
              {t}
            </span>
          )
        )}
      </div>
      <div className="mt-6 rounded-2xl border border-indigo-500/30 bg-indigo-500/5 p-6">
        <h3 className="mb-1 font-bold text-indigo-400">Resultado</h3>
        <p className="text-sm text-texto">
          Processos automatizados, dados centralizados e equipe mais
          organizada — sistema rodando em produção.
        </p>
      </div>
    </section>
  )
}

export default SevenPlus