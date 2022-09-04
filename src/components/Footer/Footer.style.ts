import styled from "styled-components"
import EmailIcon from "@mui/icons-material/Email"
import { device } from "style/media"

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.charcoal};

  @media ${device.mobile} {
    padding: 20px 20px 90px 20px;
  }
  @media ${device.tablet} {
    padding: 20px;
  }
`

export const FooterIconsContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const FooterIconContainer = styled.div`
  margin: 0 10px;
`

export const FooterCopyrightTextContainer = styled.div`
  margin-top: 15px;
`

export const FooterCopyrightText = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-family: "Arial", sans-serif;
`
