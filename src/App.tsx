import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Header from './components/Header'
import { GlobalCss } from './styles'
import RoutesProv from './routes'
import Footer from './components/Footer'
import { store } from './store/index'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <RoutesProv />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
