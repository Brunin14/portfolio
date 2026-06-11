import perfil from '../assets/Perfil.JPG' // troque por '../assets/perfil.jpg' quando tiver a foto

function Sobre() {
  const skills = [
    'JavaScript', 'React', 'Python', 'Node.js',
    'React Native', 'Django', 'Docker', 'SQL',
  ]

  return (
    <section
      id="sobre"
      className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-6 pb-24 pt-32 md:grid-cols-[280px_1fr]"
    >
      <div className="mx-auto w-full max-w-[280px]">
        <img
          src={perfil}
          alt="Foto de Bruno"
          className="aspect-square w-full rounded-3xl border-[3px] border-indigo-500 object-cover"
        />
      </div>

      <div className="text-center md:text-left">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500">
          Olá, eu sou
        </p>
        <h1 className="my-1 text-5xl font-bold text-texto">
          Bruno Alves Claro
        </h1>
        <h2 className="mb-4 text-xl font-semibold text-indigo-400">
          Desenvolvedor Full Stack
        </h2>
        <p className="text-texto-suave">
          Sou desenvolvedor apaixonado por criar soluções que unem tecnologia
          e impacto real. Trabalho com aplicações web e mobile, automações e
          integração de dados. Estou sempre buscando aprender e construir
          produtos bem feitos.
        </p>

        <div className="my-6 flex flex-wrap justify-center gap-2 md:justify-start">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-borda bg-card px-4 py-1 text-sm text-texto"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:justify-start">
          <a
            href="#projetos"
            className="rounded-lg bg-indigo-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-indigo-400"
          >
            Ver projetos
          </a>
          <a
            href="#contato"
            className="rounded-lg border border-borda px-6 py-3 font-semibold text-texto transition-colors hover:border-indigo-500"
          >
            Entre em contato
          </a>
        </div>
      </div>
    </section>
  )
}

export default Sobre