import { useState, useRef, useEffect } from 'react'

function Timeline() {
  const etapas = [
    {
      ano: '2024',
      titulo: 'Comecei na programação',
      desc: 'Curso de Desenvolvimento de Sistemas no SENAI.',
    },
    {
      ano: '2025',
      titulo: 'Primeiros sistemas em React',
      desc: 'Criei interfaces, componentes e dashboards reais.',
    },
    {
      ano: '2025',
      titulo: 'APIs e banco de dados',
      desc: 'Integrei back-end com Node.js, autenticação e MySQL.',
    },
    {
      ano: '2026',
      titulo: 'Sistemas internos com IA',
      desc: 'Desenvolvi dashboards, automações e assistentes com IA.',
    },
  ]

  const [ativo, setAtivo] = useState(false)
  const ref = useRef(null)

  // Dispara a animação quando a timeline entra na tela
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAtivo(true)
          obs.disconnect()
        }
      },
      { threshold: 0.25 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const passo = 0.45
  const total = etapas.length * passo

  return (
    <section id="trajetoria" className="mx-auto max-w-3xl px-6 py-24">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500">
          Trajetória
        </p>
        <h2 className="my-2 text-4xl font-bold text-texto">Minha evolução</h2>
        <p className="text-texto-suave">
          Do primeiro &lt;div&gt; aos sistemas com IA
        </p>
      </div>

      {/* ml-3 dá espaço pra bolinha não ser cortada na esquerda */}
      <ol ref={ref} className="relative ml-3">
        {/* Trilho cinza de fundo (linha inteira) */}
        <span className="absolute left-0 top-0 h-full w-[2px] bg-borda" />

        {/* Linha colorida que "carrega" de cima pra baixo */}
        <span
          className="absolute left-0 top-0 w-[2px] bg-indigo-500"
          style={{
            height: ativo ? '100%' : '0%',
            transition: `height ${total}s ease-out`,
          }}
        />

        {etapas.map((etapa, i) => (
          <li
            key={i}
            className="relative mb-10 pl-8 last:mb-0"
            style={{
              opacity: ativo ? 1 : 0,
              transform: ativo ? 'translateY(0)' : 'translateY(16px)',
              transition: `opacity 0.5s ease-out ${i * passo}s, transform 0.5s ease-out ${i * passo}s`,
            }}
          >
            {/* Bolinha: centralizada na linha (left-0 + translateX -50%) e
                alinhada com o ano (top-1) */}
            <span
              className="absolute left-0 top-1 h-4 w-4 rounded-full border-2 border-bg bg-indigo-500 shadow-[0_0_0_4px_rgba(99,102,241,0.2)]"
              style={{
                transform: ativo
                  ? 'translateX(-50%) scale(1)'
                  : 'translateX(-50%) scale(0)',
                transition: `transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * passo}s`,
              }}
            />
            <span className="text-sm font-semibold text-indigo-400">
              {etapa.ano}
            </span>
            <h3 className="mt-1 text-lg font-bold text-texto">{etapa.titulo}</h3>
            <p className="text-sm text-texto-suave">{etapa.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Timeline