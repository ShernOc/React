import './App.css'
import IntroReact from './IntroReact'
import Header from './Header'
import Footer from './Footer'
import Contact from './Contact'
import About from './About'
import Props from './Props'

function App() {
  return (
    <> 
    <Header/>
    <About/>
    <IntroReact/>
    <Props 
    title = "WHAT ARE PROPS?: displayed as a prop" 
    display = "props in curly braces"/>
    <Contact /><br />
    <Footer/>
    
  <b></b>
    </>
  )
}

export default App
