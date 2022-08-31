import { AppContainer } from "App.style"
import Footer from "components/Footer/Footer"
import Navbar from "components/Navbar/Navbar"
import React, { useState } from "react"
import About from "views/About/About"
import Experience from "views/Experience/Experience"
import Home from "views/Home/Home"
import Projects from "views/Projects/Projects"
import Skills from "views/Skills/Skills"
import Providers from './providers/Providers'
import NavbarMobile from "components/Navbar/NavbarMobile"


function App() {
  const [viewport, setViewport] = useState(window.innerWidth || document.documentElement.clientWidth)
  window.addEventListener('resize', () => {
    setViewport(window.innerWidth || document.documentElement.clientWidth)
  })

  return (
    <Providers>
      <AppContainer>
        {viewport > 640 ? <Navbar /> : <NavbarMobile />}        
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Footer />
      </AppContainer>
    </Providers>
  )
}

export default App
