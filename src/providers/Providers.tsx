import React from "react"
import { GlobalStyle } from "style/GlobalStyle"
import { ThemeProvider } from "styled-components"
import { theme } from "style/Theme"
import { Provider as StoreProvider } from "react-redux"
import store from "store/index"
import ModalProvider from "./ModalProvider"

const Providers = (props) => {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <GlobalStyle />
          {props.children}
        </ModalProvider>
      </ThemeProvider>
    </StoreProvider>
  )
}

export default Providers
