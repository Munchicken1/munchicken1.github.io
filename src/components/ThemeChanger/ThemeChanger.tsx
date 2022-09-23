import React from "react"
import {
  ThemesListContainer,
  ThemesList,
  ThemeIcon,
} from "./ThemeChanger.style"

const ThemeChanger = () => {
  return (
    <ThemesListContainer>
      <ThemesList>
        <ThemeIcon themeColor="#edddb3" />
        <ThemeIcon themeColor="#c9b3ed" />
        <ThemeIcon themeColor="#dcedb3" />
      </ThemesList>
    </ThemesListContainer>
  )
}

export default ThemeChanger
