import React from "react"
import {
  FooterContainer,
  FooterIconsContainer,
  FooterIconContainer,
  FooterCopyrightText,
  FooterCopyrightTextContainer,
} from "./Footer.style"
import { SocialIcon } from "react-social-icons"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterIconsContainer>
        <FooterIconContainer>
          <SocialIcon
            url="https://www.linkedin.com/in/sj-roh/"
            target="_blank"
            bgColor="#FFFFFF"
          />
        </FooterIconContainer>

        <FooterIconContainer>
          <SocialIcon
            url="https://github.com/Munchicken1"
            target="_blank"
            bgColor="#FFFFFF"
          />
        </FooterIconContainer>
        <FooterIconContainer>
          <SocialIcon
            url="mailto:soojong1996@gmail.com"
            target="_blank"
            bgColor="#FFFFFF"
          />
        </FooterIconContainer>
      </FooterIconsContainer>
      <FooterCopyrightTextContainer>
        <FooterCopyrightText>Website by Soo Jong Roh</FooterCopyrightText>
      </FooterCopyrightTextContainer>
    </FooterContainer>
  )
}

export default Footer
