import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Proyect from './components/Proyect'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <main>
        <Home />
        <About />
        <Proyect />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
