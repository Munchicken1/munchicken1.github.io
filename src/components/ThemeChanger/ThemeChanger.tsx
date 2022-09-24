import React from "react"
import {
  ThemesListContainer,
  ThemesList,
  ThemeIcon,
} from "./ThemeChanger.style"
import { theme, secondTheme, thirdTheme } from "style/Theme"
import { DefaultTheme } from "styled-components"

interface IProps {
  selectedTheme: DefaultTheme
  changeTheme: (theme) => void | null
}
const ThemeChanger: React.FC<IProps> = ({ changeTheme, selectedTheme }) => {
  return (
    <ThemesListContainer>
      <ThemesList>
        <ThemeIcon
          themeColor="#edddb3"
          onClick={() => {
            changeTheme(theme)
          }}
          selectedTheme={selectedTheme}
        />
        <ThemeIcon
          themeColor="#c9b3ed"
          onClick={() => {
            changeTheme(secondTheme)
          }}
          selectedTheme={selectedTheme}
        />
        <ThemeIcon
          themeColor="#dcedb3"
          onClick={() => {
            changeTheme(thirdTheme)
          }}
          selectedTheme={selectedTheme}
        />
      </ThemesList>
    </ThemesListContainer>
  )
}

export default ThemeChanger
