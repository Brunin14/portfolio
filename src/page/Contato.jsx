import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const EMAIL = 'brunoalvesclaroo@gmail.com' // 👈 seu e-mail real

function Contato() {

  const assunto = encodeURIComponent('Contato via portfólio')
  const corpo = encodeURIComponent(
    'Olá Bruno, vi seu portfólio e gostaria de conversar sobre '
  )

  // Abre a tela de escrever do Gmail já preenchida
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${assunto}&body=${corpo}`


  const redes = [
    { label: 'GitHub', url: 'https://github.com/Brunin14', Icone: FaGithub },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/bruno-alves-6456b7289/', Icone: FaLinkedin },
    { label: 'E-mail', url: gmail, Icone: FaEnvelope },
  ]

  return (
    <section id="contato" className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500">
          Contato
        </p>
        <h2 className="my-2 text-4xl font-bold text-texto">Vamos conversar?</h2>
        <p className="text-texto-suave">
          Estou disponível para projetos e oportunidades
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {redes.map(({ label, url, Icone }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-borda bg-card px-7 py-4 font-semibold text-texto transition-all hover:-translate-y-1 hover:border-indigo-500"
          >
            <Icone className="text-xl text-indigo-400" />
            {label}
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contato