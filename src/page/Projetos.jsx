import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

function Projetos() {
  const projetos = [
    {
      titulo: 'Django Auth Microservice',
      status: 'Em produção',
      tipo: 'Microserviço de autenticação',
      nivel: 'Avançado',
      descricao:
        'Serviço central de autenticação com JWT, refresh tokens, verificação de e-mail, rate limiting e base para 2FA. Pronto para SaaS e APIs.',
      stack: ['Django 5', 'DRF', 'JWT', 'Swagger', 'allauth'],
      repo: 'https://github.com/Brunin14/Django-Auth-MicroService',
      demo: 'https://django-auth-microservice.onrender.com/api/docs/',
    },
    {
      titulo: 'E-commerce Product Page',
      status: 'Concluído',
      tipo: 'Landing page de e-commerce',
      nivel: 'Intermediário',
      descricao:
        'Página de produto focada em conversão, com carrinho via Context API, persistência em LocalStorage, carrossel responsivo e mini cart interativo.',
      stack: ['React', 'TypeScript', 'Sass', 'Context API'],
      repo: 'https://github.com/Brunin14/ecommerce-product-page',
      demo: '', // coloque o link da demo se tiver
    },
    {
      titulo: 'Clima de Cidades',
      status: 'Concluído',
      tipo: 'Consumo de API (clima)',
      nivel: 'Intermediário',
      descricao:
        'App que consome a API do OpenWeather para mostrar clima, temperatura, umidade e vento de qualquer cidade, com tratamento de erros e loader.',
      stack: ['JavaScript', 'Fetch API', 'OpenWeather', 'HTML/CSS'],
      repo: 'https://github.com/Brunin14/Clima-Da-Cidade', // ajuste o nome do repo se for outro
      demo: '', // coloque o link da demo se publicar
    },
    {
      titulo: 'Assistente IA',
      status: 'Em produção',
      tipo: 'Chatbot com IA',
      nivel: 'Avançado',
      descricao:
        'Assistente conversacional integrado a uma base de conhecimento, usando IA (Gemini) pra responder dúvidas de forma instantânea e padronizada.',
      stack: ['Flask', 'Gemini', 'React', 'IA'],
    },
  ]

  const corStatus = (s) =>
    s === 'Em produção'
      ? 'bg-emerald-500/15 text-emerald-400'
      : s === 'Concluído'
      ? 'bg-indigo-500/15 text-indigo-300'
      : 'bg-yellow-500/15 text-yellow-400'

  return (
    <section id="projetos" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500">
          Portfólio
        </p>
        <h2 className="my-2 text-4xl font-bold text-texto">Outros projetos</h2>
        <p className="text-texto-suave">
          Backend, frontend e consumo de APIs
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {projetos.map((p) => (
          <article
            key={p.titulo}
            className="flex flex-col rounded-2xl border border-borda bg-card p-6 transition-all hover:-translate-y-1 hover:border-indigo-500"
          >
            {/* Título + status */}
            <div className="mb-3 flex items-start justify-between gap-2">
              <h3 className="text-lg font-bold text-texto">{p.titulo}</h3>
              <span
                className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${corStatus(
                  p.status
                )}`}
              >
                {p.status}
              </span>
            </div>

            {/* Descrição */}
            <p className="mb-4 text-sm text-texto-suave">{p.descricao}</p>

            {/* Tipo / Nível */}
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

            {/* Stack */}
            <div className="mb-5 flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-indigo-500/15 px-2.5 py-1 text-xs text-indigo-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Botões (empurrados pro fim do card) */}
            <div className="mt-auto flex flex-wrap gap-3">
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-borda px-3 py-2 text-sm font-semibold text-texto transition-colors hover:border-indigo-500"
                >
                  <FaGithub /> Código
                </a>
              )}
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-indigo-500 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-400"
                >
                  <FaExternalLinkAlt className="text-xs" /> Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projetos