import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { ApiContextProvider } from './context/ApiContext'

import Health from "./pages/Health"
import Home from './pages/Home'
import Politics from "./pages/Politics"
import Science from "./pages/Science"
import World from "./pages/World"


const Routers = () => {
  return (
    <>
      <Router>
        <ApiContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/saude" element={<Health />} />
            <Route path="/politica" element={<Politics />} />
            <Route path="/ciencia" element={<Science />} />
            <Route path="/mundo" element={<World />} />
          </Routes>
          <Footer />
        </ApiContextProvider>
      </Router>
    </>
  )
}

export default Routers;
