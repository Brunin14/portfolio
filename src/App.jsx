import Navbar from './components/Navbar'
import CommandPalette from './components/CommandPalette'
import Home from './page/Home'
import ProblemasQueResolvo from './page/ProblemasQueResolvo'
import Skills from './page/Skills'
import SevenPlus from './page/SevenPlus'
import Projetos from './page/Projetos'
import Timeline from './page/Timeline'
import Contato from './page/Contato'

function App() {
  return (
    <div id="topo" className="min-h-screen bg-bg text-texto">
      <Navbar />
      <CommandPalette />

      <main>
        <Home />
        <ProblemasQueResolvo />
        <Skills />
        <SevenPlus />
        <Projetos />
        <Timeline />
        <Contato />
      </main>

      <footer className="border-t border-borda py-8 text-center text-sm text-texto-suave">
        <p>© 2026 Bruno Alves Claro</p>
      </footer>
    </div>
  )
}

export default App