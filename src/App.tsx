import { AppContainer } from "App.style"
import Navbar from "components/Navbar/Navbar"
import React from "react"
import About from "views/About/About"
import Experience from "views/Experience/Experience"
import Home from "views/Home/Home"
import Projects from "views/Projects/Projects"
import Skills from "views/Skills/Skills"
import Providers from './providers/Providers'

function App() {
  return (
    <Providers>
      <AppContainer>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Experience />
      </AppContainer>
    </Providers>
  )
}

export default App
