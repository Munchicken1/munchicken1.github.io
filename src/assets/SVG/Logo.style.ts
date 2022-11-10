import { device } from "style/media"
import styled from "styled-components"

export const Logo = styled.svg`
  width: 100%;

  @media ${device.mobile} {
    height: 70vh;
  }
  @media ${device.tablet} {
    height: 60vw;
  }
`
