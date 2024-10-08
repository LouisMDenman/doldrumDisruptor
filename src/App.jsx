import './App.css'
import './ActivityOutput.css'
import { ActivityOutput } from './components/ActivityOutput'
import { useThemeContext } from './contexts/ThemeContextProvider'

function App() {

  const [currentTheme, toggleTheme] = useThemeContext()

  return (
    <>
      <header>
        <h1>Doldrum Disruptor</h1>
      </header>
      <main>
        <ActivityOutput />
        <div id="checkboxes">
          <div>
            <input type="checkbox" id="solo" name="solo"/>
            <label for="solo">Solo Activity</label>
          </div>
          <div>
            <input type="checkbox" id="social" name="social"/>
            <label for="social">Social</label>
          </div>
          <div>
            <input type="checkbox" id="recreational" name="recreational"/>
            <label for="recreational">Recreational</label>
          </div>
          <div>
            <input type="checkbox" id="educational" name="educational"/>
            <label for="educational">Educational</label>
          </div>
          <div>
            <input type="checkbox" id="relaxing" name="relaxing"/>
            <label for="relaxing">Relaxing</label>
          </div>
          <div>
            <input type="checkbox" id="charitable" name="charitable"/>
            <label for="charitable">Charitable</label>
          </div>
          <div>
            <input type="checkbox" id="cooking" name="cooking"/>
            <label for="cooking">Cooking</label>
          </div>
          <div>
            <input type="checkbox" id="work" name="work"/>
            <label for="work">Work</label>
          </div>
        </div>
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
