import './App.css'
import { useThemeContext } from './contexts/ThemeContextProvider'

function App() {

  const [currentTheme, toggleTheme] = useThemeContext()

  return (
    <>
      <h1>Doldrum Disruptor</h1>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </>
  )
}

export default App
