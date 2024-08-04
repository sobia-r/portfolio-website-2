import './App.css'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'
import Hero from './sections/Hero/Hero'
import NavBar from './sections/NavBar/NavBar'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'

function App() {
  console.log('test')
  return (
    <>
      <NavBar/>
      <Hero/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
