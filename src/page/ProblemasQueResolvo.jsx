import { FaSync, FaChartLine, FaRobot, FaPlug, FaServer } from 'react-icons/fa'

function ProblemasQueResolvo() {
  const itens = [
    { Icone: FaSync, texto: 'Transformo processos manuais em sistemas web.' },
    { Icone: FaChartLine, texto: 'Crio dashboards para visualizar dados e métricas.' },
    { Icone: FaRobot, texto: 'Automatizo documentos e tarefas repetitivas.' },
    { Icone: FaPlug, texto: 'Integro APIs, banco de dados e inteligência artificial.' },
    { Icone: FaServer, texto: 'Publico sistemas em produção com VPS, domínio e SSL.' },
  ]

  return (
    <section id="problemas" className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500">
          O que eu faço
        </p>
        <h2 className="my-2 text-4xl font-bold text-texto">
          Problemas que eu resolvo
        </h2>
        <p className="text-texto-suave">
          Não faço só telas — entrego solução de ponta a ponta
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {itens.map(({ Icone, texto }) => (
          <div
            key={texto}
            className="flex items-start gap-4 rounded-2xl border border-borda bg-card p-5 transition-colors hover:border-indigo-500"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400">
              <Icone className="text-lg" />
            </span>
            <p className="text-texto">{texto}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProblemasQueResolvo