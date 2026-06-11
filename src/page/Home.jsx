import { useState, useRef, useEffect } from 'react'
import Terminal from '../components/Terminal'

// Número que sobe quando entra na tela
function Contador({ alvo, sufixo = '' }) {
  const [n, setN] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        let inicio = null
        const dur = 1400
        const passo = (t) => {
          if (inicio === null) inicio = t
          const prog = Math.min((t - inicio) / dur, 1)
          setN(Math.floor(prog * alvo))
          if (prog < 1) requestAnimationFrame(passo)
        }
        requestAnimationFrame(passo)
        obs.disconnect()
      },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [alvo])

  return (
    <span ref={ref}>
      {n}
      {sufixo}
    </span>
  )
}

function Home() {
  const metricas = [
    { valor: 10, sufixo: '+', label: 'Projetos criados' },
    { valor: 12, sufixo: '+', label: 'Tecnologias' },
    { valor: 7, sufixo: '', label: 'Certificados' },
    { valor: 19, sufixo: '+', label: 'Sistemas em produção' },
  ]

  return (
    <section id="home" className="mx-auto max-w-5xl px-6 pb-24 pt-32">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500">
          Bem-vindo ao painel do Bruno
        </p>
        <h1 className="mx-auto my-3 max-w-3xl text-4xl font-bold leading-tight text-texto md:text-5xl">
          Eu crio sistemas reais: com interface, banco de dados, automações,
          IA e deploy.
        </h1>
        <p className="mx-auto max-w-2xl text-texto-suave">
          Desenvolvo sistemas web, automações e interfaces inteligentes que
          transformam processos manuais em soluções digitais.
        </p>
      </div>

      {/* Terminal */}
      <Terminal />

      {/* Cards de métricas */}
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {metricas.map((m) => (
          <div
            key={m.label}
            className="rounded-2xl border border-borda bg-card p-6 text-center"
          >
            <p className="text-4xl font-bold text-indigo-400">
              <Contador alvo={m.valor} sufixo={m.sufixo} />
            </p>
            <p className="mt-1 text-sm text-texto-suave">{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Home