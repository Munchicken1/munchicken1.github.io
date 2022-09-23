import { device } from "style/media"
import styled, { css } from "styled-components"

export const ThemesListContainer = styled.div`
  position: absolute;
  right: 30px;
  z-index: 2;

  @media ${device.tablet} {
    top: 50%;
    height: 40vh;
    transform: translateY(-50%);
    background-color: transparent;
  }
`

export const ThemesList = styled.ul`
  display: flex;
  justify-content: space-between;

  height: 100%;

  @media ${device.tablet} {
    flex-direction: column;
    margin-left: 15px;
  }
`

interface IThemeChangerProps {
  themeColor: string
}
export const ThemeIcon = styled.li<IThemeChangerProps>`
  padding: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.themeColor};

  ${(props) => {
    if (props.themeColor === "#edddb3") {
      return css`
        border: 2px solid ${(props) => props.theme.colors.moonDark};
      `
    } else if (props.themeColor === "#c9b3ed") {
      return css`
        border: 2px solid ${(props) => props.theme.colors.purple};
      `
    } else if (props.themeColor === "#dcedb3") {
      return css`
        border: 2px solid ${(props) => props.theme.colors.teaGreen};
      `
    }
  }}
`
