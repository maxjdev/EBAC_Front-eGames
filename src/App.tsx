import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import { GlobalCss } from './styles'
import RoutesProv from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RoutesProv />
    </BrowserRouter>
  )
}

export default App
