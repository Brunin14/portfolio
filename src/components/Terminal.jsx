import { useState, useRef, useEffect } from 'react'

// Saídas de cada comando (arrays de linhas)
const COMANDOS = {
  help: [
    'Comandos disponíveis:',
    '  perfil        — quem é o Bruno',
    '  skills        — tecnologias que eu uso',
    '  projects      — projetos que eu criei',
    '  contact       — como falar comigo',
    '  clear         — limpa o terminal',
  ],
  perfil: [
    'Bruno Alves Claro — Desenvolvedor Full Stack',
    'Crio sistemas reais: interface, banco de dados, automações, IA e deploy.',
  ],
  skills: [
    'React .......... avançado',
    'Node.js ........ em uso',
    'Banco de dados . conectado',
    'IA ............. integrada',
    'Deploy ......... publicado',
    'Status ......... pronto para novos desafios',
  ],
  projects: [
    '• Seven Plus — sistema interno com IA, CRM, formulários e automações',
    '• Dashboard RD Station — métricas, leads, ROI, CAC e faturamento',
    '• Gerador PGRS — gera documentos automáticos a partir de formulários',
    '• Assistente com IA e base de conhecimento',
  ],
  contact: [
    'GitHub:   https://github.com/Brunin14',
    'LinkedIn: https://www.linkedin.com/in/bruno-alves-6456b7289/',
    'E-mail:   brunoalvesclaroo@gmail.com',
  ],
}

const ATALHOS = ['help', 'perfil', 'skills', 'projects', 'contact']

function Terminal() {
  const [linhas, setLinhas] = useState([])
  const [input, setInput] = useState('')
  const corpoRef = useRef(null)
  const inputRef = useRef(null)

  // Boot animado ao montar
  useEffect(() => {
    const boot = [
      { t: '> rodar perfil --dev', c: 'text-indigo-400' },
      { t: 'Carregando habilidades...', c: 'text-texto-suave' },
      { t: 'React: avançando', c: 'text-emerald-400' },
      { t: 'Node.js: em uso', c: 'text-emerald-400' },
      { t: 'Banco de dados: conectado', c: 'text-emerald-400' },
      { t: 'IA: integrada', c: 'text-emerald-400' },
      { t: 'Status: pronto ✓', c: 'text-emerald-400' },
      { t: 'Digite "help" ou clique num comando abaixo.', c: 'text-texto-suave' },
    ]
    const timers = boot.map((linha, i) =>
      setTimeout(() => setLinhas((prev) => [...prev, linha]), i * 350)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  // Sempre rola pro fim
  useEffect(() => {
    const el = corpoRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [linhas])

  const rodar = (cmd) => {
    const nome = cmd.trim().toLowerCase()
    if (!nome) return

    setLinhas((prev) => [...prev, { t: `> ${nome}`, c: 'text-indigo-400' }])

    if (nome === 'clear') {
      setLinhas([])
      return
    }

    const saida = COMANDOS[nome]
    if (saida) {
      setLinhas((prev) => [
        ...prev,
        ...saida.map((t) => ({ t, c: 'text-texto' })),
      ])
    } else {
      setLinhas((prev) => [
        ...prev,
        { t: `comando não encontrado: ${nome} — digite "help"`, c: 'text-red-400' },
      ])
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    rodar(input)
    setInput('')
  }

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="overflow-hidden rounded-xl border border-borda bg-soft font-mono text-sm shadow-2xl"
    >
      {/* Barra superior (bolinhas) */}
      <div className="flex items-center gap-2 border-b border-borda bg-card px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
        <span className="ml-2 text-xs text-texto-suave">bruno@portfolio: ~</span>
      </div>

      {/* Corpo */}
        <div ref={corpoRef} className="h-72 overflow-y-auto p-4">
        {linhas.map((linha, i) => (
            <div key={i} className={`whitespace-pre-wrap ${linha.c}`}>
            {linha.t}
            </div>
        ))}

        {/* Linha de input */}
        <form onSubmit={onSubmit} className="mt-1 flex items-center gap-2">
            <span className="text-indigo-400">{'>'}</span>
            <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            spellCheck={false}
            className="flex-1 bg-transparent text-texto caret-indigo-400 outline-none"
            placeholder="digite um comando..."
            />
        </form>
        {/* a <div ref={fimRef} /> foi removida */}
        </div>

      {/* Atalhos clicáveis */}
      <div className="flex flex-wrap gap-2 border-t border-borda bg-card px-4 py-3">
        {ATALHOS.map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => rodar(cmd)}
            className="rounded-md border border-borda px-3 py-1 text-xs text-texto-suave transition-colors hover:border-indigo-500 hover:text-indigo-400"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Terminal