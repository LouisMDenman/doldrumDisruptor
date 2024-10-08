import './App.css'
import './styles/ActivityOutput.css'
import './styles/ActivitySelectors.css'
import { ActivityOutput } from './components/ActivityOutput'
import { useThemeContext } from './contexts/ThemeContextProvider'
import { ActivitySelectors } from './components/ActivitySelectors'

function App() {

  const [currentTheme, toggleTheme] = useThemeContext()

  return (
    <>
      <header>
        <h1>Doldrum Disruptor</h1>
      </header>
      <main>
        <ActivityOutput />
        <ActivitySelectors />
        <button id="search">
          Find Activity
        </button>
      </main>
      <footer>
        <button id="theme" onClick={toggleTheme}>
          Toggle Theme
        </button>
      </footer>
    </>
  )
}

export default App
