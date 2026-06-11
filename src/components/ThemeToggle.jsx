import { useState, useEffect } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

function ThemeToggle() {
  const [escuro, setEscuro] = useState(() => {
    if (typeof localStorage !== 'undefined' && localStorage.theme) {
      return localStorage.theme === 'dark'
    }
    return true // padrão: escuro
  })

  useEffect(() => {
    const root = document.documentElement
    if (escuro) {
      root.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      root.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }, [escuro])

  return (
    <button
      type="button"
      onClick={() => setEscuro((v) => !v)}
      aria-label="Alternar tema"
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-borda text-texto transition-colors hover:border-indigo-500 hover:text-indigo-400"
    >
      {escuro ? <FaSun /> : <FaMoon />}
    </button>
  )
}

export default ThemeToggle