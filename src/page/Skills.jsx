import { FaReact, FaServer, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa'

function Skills() {
  const categorias = [
    {
      Icone: FaReact,
      area: 'Frontend',
      techs: ['React', 'Vite', 'CSS', 'Responsividade', 'Componentes'],
    },
    {
      Icone: FaServer,
      area: 'Backend',
      techs: ['Node.js', 'Express', 'APIs REST', 'Autenticação', 'JWT'],
    },
    {
      Icone: FaDatabase,
      area: 'Banco de dados',
      techs: ['MySQL', 'MariaDB', 'Modelagem de tabelas'],
    },
    {
      Icone: FaCloud,
      area: 'Deploy',
      techs: ['VPS', 'NGINX', 'PM2', 'Domínio', 'SSL'],
    },
    {
      Icone: FaRobot,
      area: 'IA',
      techs: ['Gemini', 'Base de conhecimento', 'Chat'],
    },
  ]

  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500">
          Stack
        </p>
        <h2 className="my-2 text-4xl font-bold text-texto">
          O que eu sei fazer
        </h2>
        <p className="text-texto-suave">Tecnologias organizadas por área</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categorias.map(({ Icone, area, techs }) => (
          <div
            key={area}
            className="rounded-2xl border border-borda bg-card p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-400">
                <Icone />
              </span>
              <h3 className="text-lg font-bold text-texto">{area}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {techs.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-borda bg-soft px-3 py-1 text-sm text-texto-suave"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills