function Projetos() {
  const projetos = [
    {
      titulo: 'Dashboard RD Station',
      status: 'Em produção',
      tipo: 'Dashboard de dados',
      nivel: 'Avançado',
      stack: ['React', 'Charts', 'API'],
    },
    {
      titulo: 'TaskBoard',
      status: 'Em produção',
      tipo: 'Gestão de tarefas',
      nivel: 'Intermediário',
      stack: ['React', 'Drag & Drop', 'Node.js'],
    },
    {
      titulo: 'Assistente IA',
      status: 'Em produção',
      tipo: 'Chatbot com IA',
      nivel: 'Avançado',
      stack: ['Flask', 'Gemini', 'React'],
    },
    {
      titulo: 'CopyHub',
      status: 'Em produção',
      tipo: 'Central de conteúdo',
      nivel: 'Intermediário',
      stack: ['React', 'Node.js', 'MySQL'],
    },
  ]

  const corStatus = (s) =>
    s === 'Em produção'
      ? 'bg-emerald-500/15 text-emerald-400'
      : 'bg-yellow-500/15 text-yellow-400'

  return (
    <section id="projetos" className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500">
          Portfólio
        </p>
        <h2 className="my-2 text-4xl font-bold text-texto">Outros projetos</h2>
        <p className="text-texto-suave">Sistemas que desenvolvi e mantenho</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projetos.map((p) => (
          <article
            key={p.titulo}
            className="rounded-2xl border border-borda bg-card p-6 transition-all hover:-translate-y-1 hover:border-indigo-500"
          >
            <div className="mb-3 flex items-center justify-between gap-2">
              <h3 className="text-lg font-bold text-texto">{p.titulo}</h3>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${corStatus(
                  p.status
                )}`}
              >
                {p.status}
              </span>
            </div>

            <dl className="mb-4 grid grid-cols-2 gap-2 text-sm">
              <div>
                <dt className="text-texto-suave">Tipo</dt>
                <dd className="text-texto">{p.tipo}</dd>
              </div>
              <div>
                <dt className="text-texto-suave">Nível</dt>
                <dd className="text-texto">{p.nivel}</dd>
              </div>
            </dl>

            <div className="flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-indigo-500/15 px-2.5 py-1 text-xs text-indigo-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projetos