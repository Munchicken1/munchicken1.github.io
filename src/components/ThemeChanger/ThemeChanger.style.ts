import { device } from "style/media"
import styled, { css, DefaultTheme } from "styled-components"

export const ThemesListContainer = styled.div`
  position: absolute;
  z-index: 2;
  background-color: transparent;

  @media ${device.mobile} {
    top: 30px;
    right: 50%;
    width: 50vw;
    height: auto;
    transform: translateX(50%);
  }

  @media ${device.tablet} {
    top: 50%;
    right: 30px;
    height: 40vh;
    width: auto;
    transform: translateY(-50%);
  }
`

export const ThemesList = styled.ul`
  display: flex;
  justify-content: space-between;

  height: 100%;

  @media ${device.mobile} {
    flex-direction: row;
  }

  @media ${device.tablet} {
    flex-direction: column;
  }
`

interface IThemeChangerProps {
  themeColor: string
  selectedTheme: DefaultTheme
}
export const ThemeIcon = styled.li<IThemeChangerProps>`
  padding: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.themeColor};
  cursor: pointer;

  ${(props) => {
    if (
      props.themeColor === "#edddb3" &&
      props.selectedTheme.colors.currentTheme === "Moon"
    ) {
      return css`
        background-color: #e3cb8a;
        border: 2px solid ${(props) => props.theme.colors.charcoal};
      `
    } else if (
      props.themeColor === "#c9b3ed" &&
      props.selectedTheme.colors.currentTheme === "Violet"
    ) {
      return css`
        background-color: #8c7da6;
        border: 2px solid ${(props) => props.theme.colors.charcoal};
      `
    } else if (
      props.themeColor === "#dcedb3" &&
      props.selectedTheme.colors.currentTheme === "GreenTea"
    ) {
      return css`
        background-color: #9aa67d;
        border: 2px solid ${(props) => props.theme.colors.charcoal};
      `
    } else if (props.themeColor === "#edddb3") {
      return css`
        border: 2px solid ${(props) => props.theme.colors.greyWater};
        :hover {
          border: 2px solid ${(props) => props.theme.colors.charcoal};
        }
        :active {
          border: 2px solid ${(props) => props.theme.colors.charcoal};
          background-color: #e3cb8a;
        }
      `
    } else if (props.themeColor === "#c9b3ed") {
      return css`
        border: 2px solid ${(props) => props.theme.colors.greyWater};
        :hover {
          border: 2px solid ${(props) => props.theme.colors.charcoal};
        }
        :active {
          border: 2px solid ${(props) => props.theme.colors.charcoal};
          background-color: #8c7da6;
        }
      `
    } else if (props.themeColor === "#dcedb3") {
      return css`
        border: 2px solid ${(props) => props.theme.colors.greyWater};
        :hover {
          border: 2px solid ${(props) => props.theme.colors.charcoal};
        }
        :active {
          border: 2px solid ${(props) => props.theme.colors.charcoal};
          background-color: #9aa67d;
        }
      `
    }
  }}
`
