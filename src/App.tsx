import { AppContainer } from "App.style"
import Footer from "components/Footer/Footer"
import Navbar from "components/Navbar/Navbar"
import React, { useState } from "react"
import About from "views/About/About"
import Experience from "views/Experience/Experience"
import Home from "views/Home/Home"
import Projects from "views/Projects/Projects"
import Skills from "views/Skills/Skills"
import Providers from "./utilities/providers/Providers"
import ThemeChanger from "components/ThemeChanger/ThemeChanger"
import NavbarMobile from "components/Navbar/NavbarMobile"
import { theme } from "style/Theme"

function App() {
  const [viewport, setViewport] = useState(
    window.innerWidth || document.documentElement.clientWidth
  )
  window.addEventListener("resize", () => {
    setViewport(window.innerWidth || document.documentElement.clientWidth)
  })

  const [selectedTheme, setSelectedTheme] = useState(theme)

  const handleThemeChanger = (theme) => {
    setSelectedTheme(theme)
  }

  return (
    <Providers selectedTheme={selectedTheme}>
      <AppContainer>
        <Navbar />
        <ThemeChanger
          selectedTheme={selectedTheme}
          changeTheme={handleThemeChanger}
        />
        <Home selectedTheme={selectedTheme} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Footer selectedTheme={selectedTheme} />
      </AppContainer>
    </Providers>
  )
}

export default App
